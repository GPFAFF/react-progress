import React, { Component } from 'react';
import WeddingMap from '../components/events/wedding-map.jsx';
import Wedding from '../components/events/wedding.jsx';
import WelcomePartyMap from '../components/events/welcome-party-map.jsx';
import WelcomeParty from '../components/events/welcome-party.jsx';

class Events extends Component {
  render () {
    return (
      <div>
        <h3> Events </h3>
        <p className="seperator"></p>
        <h3> Wedding Ceremony and Reception </h3>
        <WeddingMap />
        <Wedding />
        <h3> Welcome Party </h3>
        <WelcomePartyMap />
        <WelcomeParty />
        <p className="seperator"></p>
      </div>
    );
  }
}

module.exports = Events;
