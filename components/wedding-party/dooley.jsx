import React, { Component } from 'react';

class LaurenDooley extends Component {
  render () {
    return (
      <div className="wedding-party">
        <div className="wedding-party-information">
          <h3> Lauren Dooley </h3>
          <h5> Bridesmaid </h5>
        </div>

        <div className="wedding-party-picture">
          <img className="wedding-picture" alt="wedding photo portrait" src="./img/lauren.jpg"/>
        </div>
      </div>
    )
  }
}

module.exports = LaurenDooley;
