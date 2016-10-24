import React from 'react';
import GoogleMap from '../components/maps.jsx';
import Location from '../components/location.jsx';

export default class Events extends React.Component {
  render () {
    return (
      <div>
        <h3> Events </h3>
        <GoogleMap />
        <Location />
      </div>
    );
  }
}
