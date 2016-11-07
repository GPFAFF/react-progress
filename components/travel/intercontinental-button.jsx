import React from 'react';
import { Link } from 'react-router';

class IntercontinentalButton extends React.Component {
  render () {
    return (
      <div className="hotel-section">
        <a className="hotel-button" target="_blank" href="http://www.ihg.com/">Check out the Intercontinental</a>

        <div className="hotel-details">
          <p> Set in a 15-story building with an Art Deco facade, this landmark hotel is a 9-minute walk from the Texas State Capitol, 1.4 miles from the University of Texas at Austin, and 5 miles from the Barton Creek Greenbelt. </p>

          <p> The elegantly decorated rooms and suites come with cable TV and Wi-Fi (fee), as well as work desks, minibars, and tea and coffeemaking facilities. Suites add separate living rooms with pull-out sofas. Room service is available 24/7. </p>

          <p> Culinary options include an American restaurant with a wood-fired grill, plus a relaxed bar with a terrace. There's also an indoor pool, a spa, a gym and a 24/7 business center. </p>
          <p> Address: 701 Congress Ave, Austin, TX 78701 </p>
          <a href="tel:+15124578880"> Phone: (512) 457-8800 </a>
        </div>
        
      </div>
    );
  }
}

module.exports = IntercontinentalButton;
