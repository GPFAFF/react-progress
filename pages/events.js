import React from 'react';
import GoogleMap from '../components/events/maps.jsx';
import Wedding from '../components/events/wedding.jsx';
import RehersalDinner from '../components/events/rehersal-dinner.jsx';

class Events extends React.Component {
  render () {
    return (
      <div>
        <h3> Events </h3>
        <GoogleMap mlat="30.264765" mlong="-97.728805"/>
        <Wedding />
        <RehersalDinner />
      </div>
    );
  }
}

module.exports = Events;
