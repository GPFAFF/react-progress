import React, { Component } from 'react';

class MikeCastiglione extends Component {
  render () {
    return (
      <div className="wedding-party">
        <div className="wedding-party-information">
          <h3> Mike Castiglione </h3>
          <h5> Groomsman </h5>
        </div>

        <div className="wedding-party-picture">
          <img className="wedding-picture" alt="wedding photo portrait" src="./img/mike.jpg"/>
        </div>
      </div>
    )
  }
}

module.exports = MikeCastiglione;
