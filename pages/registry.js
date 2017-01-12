import React, { Component } from 'react';
import AmazonButton from '../components/registry/amazon-button.jsx';
import AnthropologieButton from '../components/registry/anthropologie-button.jsx';
import CrateAndBarrelButton from '../components/registry/crate-and-barrel-button.jsx';



class Registry extends Component {
  render () {
    return (
      <div>
        <h3> Registry </h3>
        <p className="seperator"></p>
        <AmazonButton />
        <p className="seperator"></p>
        <AnthropologieButton />
        <p className="seperator"></p>
        <CrateAndBarrelButton />
        <p className="seperator"></p>
      </div>
    );
  }
}

module.exports = Registry;
