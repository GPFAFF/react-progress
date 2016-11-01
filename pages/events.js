import React from 'react';
import GoogleMap from '../components/events/maps.jsx';
import Location from '../components/events/location.jsx';

export default class Events extends React.Component {
  render () {
    return (
      <div>
        <h3> Events </h3>
        <GoogleMap mlat="30.264765" mlong="-97.728805"/>
        <Location />
      </div>
    );
  }
}
