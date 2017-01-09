import React from 'react';

class WelcomeParty extends React.Component {
  render () {
    return (
      <div className="location">
        <a className="location button" target="_blank" href="
          http://easytigeraustin.com/"> Easy Tiger</a>
        <em> April 20th, 2017 </em>
        <p> 8:00 p.m. - 10:00 p.m.</p>
        <p> 709 E 6th St. </p>
        <p> Austin TX, 78701 </p>
        <form action='http://maps.google.com/maps' method='get' target='_blank'>
          <input type='text' placeholder="Enter your address" name='saddr' required/>
          <input type='hidden' name='daddr' value='709 E 6th St, Austin, TX' />
          <input className="location button" type='submit' value='get directions' />
        </form>
      </div>
    )
  }
}

module.exports = WelcomeParty;
