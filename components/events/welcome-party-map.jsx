import React from 'react';
import ReactDOM from 'react-dom';

var WelcomePartyMap = React.createClass({
  getDefaultProps: function () {
    return {
        initialZoom: 17,
        mapCenterLat: 30.26588,
        mapCenterLng: -97.7378667
    };
  },
  componentDidMount: function (rootNode) {
    var mapCenter = {
      lat: this.props.mapCenterLat,
      lng: this.props.mapCenterLng
    };
    var mapZoom = this.props.initialZoom;
    var mapElement = ReactDOM.findDOMNode(this);

    var initMap = function() {
      console.log("initializing");

      var mapOptions = {
        center: mapCenter,
        zoom: mapZoom
      };
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({position: mapCenter, title: 'Easy Tiger', map: map}); 
    };
    console.log(initMapFunctions);

    if (initMapFunctions == null) {
      initMap();
    } else {
      initMapFunctions.push(initMap);
    }
  },
  mapCenterLatLng: function (rootNode) {
    var props = this.props;
    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  },
  render: function () {
    return (
        <div className='google-map'></div>
    );
  }
});

module.exports = WelcomePartyMap;
