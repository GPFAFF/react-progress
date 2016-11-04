import React from 'react';
import MarriotMap from '../components/travel/marriot-map.jsx';
import MarriotButton from '../components/travel/marriot-button.jsx';

export default class Travel extends React.Component {
  render () {
    return (
      <div className="travel">
        <h3> Travel </h3>
        <p className="seperator"></p>
        <h5> JW Marriot </h5>
        <MarriotMap />
        <MarriotButton />
        <p className="seperator"></p>
        <h5> Hotel 2 </h5>
        <p className="seperator"></p>
        <h5> Hotel 3 </h5>
        <p className="seperator"></p>
        <h5> Attraction 1 </h5>
        <p className="seperator"></p>
        <h5> Attraction 2 </h5>
        <p className="seperator"></p>
        <h5> Attraction 3</h5>
        <p className="seperator"></p>
      </div>
    );
  }
}
