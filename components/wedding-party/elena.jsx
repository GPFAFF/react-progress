import React, { Component } from 'react';

class ElenaSchoch extends Component {
  render () {
    return (
      <div className="wedding-party">
        <div className="wedding-party-information">
          <h3> Elena Schoch </h3>
          <h5> Maid of Honor </h5>
        </div>

        <div className="wedding-party-picture">
          <img className="wedding-picture" alt="wedding photo portrait" src="./img/elena.jpg"/>
        </div>
      </div>
    )
  }
}

module.exports = ElenaSchoch;
