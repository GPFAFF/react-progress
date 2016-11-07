import React from 'react';
import AmazonButton from '../components/registry/amazon-button.jsx';
import CrateAndBarrelButton from '../components/registry/crate-and-barrel-button.jsx';
import WestElmButton from '../components/registry/west-elm-button.jsx';


class Registry extends React.Component {
  render () {
    return (
      <div>
        <h3> Registry </h3>
        <p className="seperator"></p>
        <AmazonButton />
        <p className="seperator"></p>
        <CrateAndBarrelButton />
        <p className="seperator"></p>
        <WestElmButton />
        <p className="seperator"></p>
      </div>
    );
  }
}

module.exports = Registry;
