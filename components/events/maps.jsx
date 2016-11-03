import React from 'react';
import ReactDOM from 'react-dom';

var GoogleMap = React.createClass({
  getDefaultProps: function () {
      return {
          initialZoom: 15,
          mapCenterLat: 30.264765,
          mapCenterLng: -97.728805
      };
  },
  componentDidMount: function (rootNode) {
      var mapOptions = {
              center: this.mapCenterLatLng(),
              zoom: this.props.initialZoom
          },
          map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
      var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Greg and Cori are getting married here!', map: map});
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

module.exports = GoogleMap;
