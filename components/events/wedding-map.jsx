import React from 'react';
import ReactDOM from 'react-dom';

var WeddingMap = React.createClass({
  getDefaultProps: function () {
    return {
        initialZoom: 15,
        mapCenterLat: 30.264765,
        mapCenterLng: -97.728805
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
      var marker = new google.maps.Marker({position: mapCenter, title: 'Greg and Cori are getting married here!', map: map}); 
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

module.exports = WeddingMap;
