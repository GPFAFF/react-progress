import React, { Component } from 'react';
import { Link } from 'react-router';

class MarriotButton extends Component {
  render () {
    return (
      <div className="hotel-section">
        <a className="hotel button" target="_blank" href="http://www.jwmarriottaustin.com/">Check out the Marriot</a>

        <div className="hotel-details">
          <p> This upscale hotel in downtown Austin is 1.5 miles from the Texas State Capitol and 2.7 miles from the University of Texas at Austin. </p>

          <p> The contemporary rooms have flat-screen TVs with premium cable channels, desks and coffeemakers. WiFi is available. Some rooms have access to a concierge lounge with free continental breakfast and evening appetizers. </p>

          <p> The property offers 2 restaurants, a bar and a Starbucks coffee shop. There's a rooftop pool with a deck, and a 24/7 fitness center. Other amenities include free WiFi in the lobby, 45 meeting rooms and a business center. </p>
          <p> Address: 110 E 2nd St, Austin, TX 78701 </p>
          <a href="tel:+15124744777"> Phone: (512) 474-4777 </a>
        </div>
        
      </div>
    );
  }
}

module.exports = MarriotButton;

