import React from 'react';
import MarriotMap from '../components/travel/marriot-map.jsx';
import MarriotButton from '../components/travel/marriot-button.jsx';
import AirbnbMap from '../components/travel/airbnb-map.jsx';
import AirbnbButton from '../components/travel/airbnb-button.jsx';
import WestinMap from '../components/travel/westin-map.jsx';
import WestinButton from '../components/travel/westin-button.jsx';
import Attractions from '../components/travel/attractions.jsx';
import Transportation from '../components/travel/transportation.jsx';



class Travel extends React.Component {
  render () {
    return (
      <div className="travel">
        <h3> Travel </h3>
        <p className="seperator"></p>
        <h5> Westin - $259.00 </h5>
        <WestinMap />
        <WestinButton />
        <p className="seperator"></p>
        <h5> AirBnB </h5>
        <AirbnbMap />
        <AirbnbButton />
        <p className="seperator"></p>
        <h5> JW Marriot </h5>
        <MarriotMap />
        <MarriotButton />
        <p className="seperator"></p>
        <h5> Things to do </h5>
        <Attractions />
        <p className="seperator"></p>
        <h5> Getting Around </h5>
        <Transportation />
        <p className="seperator"></p>
      </div>
    );
  }
}

module.exports = Travel;
