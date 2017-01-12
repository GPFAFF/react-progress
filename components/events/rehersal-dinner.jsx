import React, { Component } from 'react';

class RehersalDinner extends Component {
  render () {
    return (
      <div className="location">
        <a className="location button" target="_blank" href="http://www.austinvespaio.com/"> Vespaio </a>
        <em> April 20th, 2017 </em>
        <p> 5:00 p.m. - 7:30 p.m. </p>
        <address> 1610 South Congress Ave. Austin TX, 78702 </address>
        <p> Traditional Italian cuisine with excellent drinks.</p>
        <form action='http://maps.google.com/maps' method='get' target='_blank'>
          <input type='text' placeholder="Enter your address" name='saddr' required/>
          <input type='hidden' name='daddr' value='1610 South Congress Ave, Austin, TX' />
          <input type='submit' className="location button" value='get directions' />
        </form>
      </div>
    )
  }
}

module.exports = RehersalDinner;
