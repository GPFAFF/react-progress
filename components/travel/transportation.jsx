import React from 'react';
import { Link } from 'react-router';

class Transportation extends React.Component {
  render () {
    return (
      <div className="transportation-section">
       <p> Austin has several ways for you to get around this great city.  We suggest walking when applicable as its a very pedestrian friendly city.  But if you need to go somewhere of distance here are the companies we use to get around.  Unfortunately Uber and Lyft no longer operate in Austin due to some differences in background checks but there are several comparable options below.</p>
       <p> The other way to get around is by Taxi's.  They are the best way to get to and from the Airport.  It should cost about $25.00 dollars, and they also are all over the city so hailing a cab should be pretty easy </p>
        <ul className="getting-around">
          <li><a href="http://www.rideaustin.com/ "target="_blank"> Ride Austin </a> <strong>use promo code 4vx6xx1 for $20.00 off first ride</strong> </li>
          <li><a href="http://fasten.com/r/BL9529" target="_blank"> Fasten </a> <strong>use promo code BL9529 for $5.00 off first ride</strong></li>
          <li><a href="https://ridefare.com/ "target="_blank"> Fare </a><strong>use promo code Greg253 for $5.00 off first ride</strong></li>
        </ul>        
      </div>
    );
  }
}

module.exports = Transportation;


