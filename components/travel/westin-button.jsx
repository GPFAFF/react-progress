import React, { Component } from 'react';
import { Link } from 'react-router';

class WestinButton extends Component {
  render () {
    return (
      <div className="hotel-section">
        <a className="hotel button" target="_blank" href="http://www.westinaustindowntown.com/">Check out the Westin</a>

        <div className="hotel-details">
          <p> The Westin Austin Downtown Hotel is one of the premiere downtown Austin hotels, located one block from the Austin Convention Center and the 6th Street Entertainment District, just footsteps to the latest foodie hotspots, historic sites, legendary live music venues, eclectic shops and year-round outdoor fun.</p>

          <p> Address: 310 East 5th Street, Austin, TX, 78701 </p>
          <a href="tel:+15123912333"> Phone: (512) 391-2333  </a>
        </div>
        
      </div>
    );
  }
}

module.exports = WestinButton;
