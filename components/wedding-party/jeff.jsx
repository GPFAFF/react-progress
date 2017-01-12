import React, { Component } from 'react';

class JeffSeelbinder extends Component {
  render () {
    return (
      <div className="wedding-party">
        <div className="wedding-party-information">
          <h3> Jeff Seelbinder </h3>
          <h5> Groomsman </h5>
        </div>

        <div className="wedding-party-picture">
          <img className="wedding-picture" alt="wedding photo portrait" src="./img/jeff.jpg"/>
        </div>
      </div>
    )
  }
}

module.exports = JeffSeelbinder;
