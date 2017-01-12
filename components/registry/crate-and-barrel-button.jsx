import React, { Component } from 'react';
import { Link } from 'react-router';

class CrateAndBarrelButton extends Component {
  render () {
    return (
      <div className="registry-section">
        <div className="registry-company-picture">
          <img className="registry-picture" alt="company picture" src="./img/crateandbarrel.jpg"/>
        </div>
        <a className="registry button" target="_blank" href="http://www.crateandbarrel.com/gift-registry/cori-tanck-and-greg-pfaff/r5621388">Crate & Barrel</a>
      </div>
    );
  }
}

module.exports = CrateAndBarrelButton;
