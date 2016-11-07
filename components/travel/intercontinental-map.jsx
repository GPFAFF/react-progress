import React from 'react';
import ReactDOM from 'react-dom';

var IntercontinentalMap = React.createClass({
  getDefaultProps: function () {
      return {
          initialZoom: 17,
          mapCenterLat: 30.2690439,
          mapCenterLng: -97.742013
      };
  },
  componentDidMount: function (rootNode) {
      var mapOptions = {
              center: this.mapCenterLatLng(),
              zoom: this.props.initialZoom
          },
          map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
      var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Intercontinental Austin!', map: map});
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

module.exports = IntercontinentalMap;
