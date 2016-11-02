import React from 'react';
import AmazonButton from '../components/registry/amazon-button.jsx';
import CrateAndBarrelButton from '../components/registry/crate-and-barrel-button.jsx';
import WestElmButton from '../components/registry/west-elm-button.jsx';


export default class Registry extends React.Component {
  render () {
    return (
      <div>
        <h3> Registry </h3>
        <p className="seperator"></p>

        <h5> Registry 1</h5>

        <AmazonButton />
        <p className="seperator"></p>
        <h5> Registry 2 </h5>
        <CrateAndBarrelButton />
        <p className="seperator"></p>
        <h5> Registry 3 </h5>
        <WestElmButton />
        <p className="seperator"></p>
      </div>
    );
  }
}
