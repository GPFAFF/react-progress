import React, { Component } from 'react';
import { Link } from 'react-router';

class AirbnbButton extends Component {
  render () {
    return (
      <div className="hotel-section">
        <a className="hotel button" target="_blank" href="https://www.airbnb.com/s/Austin?neighborhoods%5B%5D=Downtown&page=1&s_tag=IAwsTGjN&allow_override%5B%5D=">Check out AirBnB</a>

        <div className="hotel-details">
          <p> For those of you who haven't used AirBnB before, it is a very affordable service where someone will rent you their apartment/home or living space for your requested period of stay.  Think of it as a bed and breakfast. </p>

          <p> We have used a variety of AirBnB's to travel and found them to very affordable and successful when traveling. </p>

          <p> Click the button to see a list of properties in Austin that will be available for the wedding timeframe. </p>
        </div>
        
      </div>
    );
  }
}

module.exports = AirbnbButton;
