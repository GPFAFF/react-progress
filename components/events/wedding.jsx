import React from 'react';

class Wedding extends React.Component {
  render () {
    return (
      <div className="location">
        <a className="location-button" target="_blank" href="
          http://www.justinessecrethouse.com/">Check out the venue</a>
        <p> Password is "Surrealist" </p>
        <h3> Wedding Ceremony and Reception </h3>
        <p> Justine's Secret House </p>
        <em> April 21st, 2017 </em>
        <p> 5:00 p.m. </p>
        <p> 1303 E 7th St - Austin, TX 78702 </p>
      </div>
    )
  }
}

module.exports = Wedding;
