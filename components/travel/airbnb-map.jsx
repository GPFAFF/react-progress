import React from 'react';
import ReactDOM from 'react-dom';

var AirbnbMap = React.createClass({
  getDefaultProps: function () {
      return {
          initialZoom: 13,
          mapCenterLat: 30.2729,
          mapCenterLng: -97.7444
      };
  },
  componentDidMount: function (rootNode) {
      var mapOptions = {
              center: this.mapCenterLatLng(),
              zoom: this.props.initialZoom
          },
          map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
      var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Downtown Austin!', map: map});
      this.setState({map: map});
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

module.exports = AirbnbMap;
