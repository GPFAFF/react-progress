import React, { Component } from 'react';
import { Link } from 'react-router';

class Attractions extends Component {
  render () {
    return (
      <div className="attraction-section">
       <p> Austin has plenty of awesome things to do.  Some of our favorite places to go are, Rainey Street, South Congress Avenue, Zilker Park and the Green Belt just to name a few.  As far as eating you cannot go wrong with food in Austin.  Definitely get some queso, definitely get some barbeque and some of the best meals come from food trucks.  Feel free to reach out to us for recommendations.  Below is a good article on some of the best things to do in Austin. </p>
        <ul className="things-to-do">
          <li><a href="http://austin.eater.com/2016/7/29/11844012/austin-city-guide-where-to-eat" target="_blank"> Eaters Best Places to Eat and Austin Lingo</a></li>
          <li><a href="http://365thingsaustin.com/2011/05/02/25-best-things-to-do-in-austin-texas/"target="_blank"> 25 things to do in Austin </a></li>
          <li><a href="http://do512.com/mustdoinaustin" target="_blank"> 512 Austin</a></li>
        </ul>        
      </div>
    );
  }
}

module.exports = Attractions;


