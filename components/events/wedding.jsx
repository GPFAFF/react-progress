import React, { Component } from 'react';

class Wedding extends Component {
  render () {
    return (
      <div className="location">
        <a className="location button" target="_blank" href="
          http://www.justinessecrethouse.com/">Justine’s Secret House</a>
        <p> Password is "Surrealist" </p>
        <em> April 21st, 2017 </em>
        <p> 5:00 p.m. - 10:00 p.m.</p>
        <address> 1303 E 7th St Austin, TX 78702 </address>
        <form action='http://maps.google.com/maps' method='get' target='_blank'>
          <input type='text' placeholder="Enter your address" name='saddr' required/>
          <input type='hidden' name='daddr' value='1303 E 7th St, Austin, TX 78702' />
          <input className="location button" type='submit' value='get directions' />
        </form>
        <p> Justine’s Secret House is our very hush hush opulent Victorian house with New Orleans style garden, all hidden away on East 7th Street.  Part Chateau Marmont, part haunted New Orleans Victorian, part Parisian salon, this space is exclusively used for private events. Cocktail style soiree with heavy food station to follow reception. </p>
        <p> <strong> Please arrive 15 minutes prior to the ceremony start time. </strong></p>
        <p> There is metered street parking around the venue, but the best way to arrive will be by taxi or rideshare services. </p>
      </div>
    )
  }
}

module.exports = Wedding;
