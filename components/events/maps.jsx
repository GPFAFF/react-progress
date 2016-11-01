import React from 'react';

export default class GoogleMap extends React.Component {

  static propTypes() {
    initalCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

  render() {
    return (
      <div className="GoogleMap">
        MAP GOES HERE
      </div>
    )
  }
  componentDidMount() {
    this.map = this.createMap();
    this.marker = this.createMarker();
    this.infoWindow = this.createInfoWindow();

    google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange());
  }

  compontentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed');
  }

  createMap() {
    let mapOptions = {
      zoom: 10,
      center: this.mapCenter()
    }
    return new google.maps.map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {
    return new google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })
  }
  createInfoWindow() {
    let contentString = "<div> You cannot see the venue from the street </div>"
    return new google.maps.infoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    })
  }

  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
  }
}
var initialCenter = { lng: -90.1056957, lat: 29.9717272 };
