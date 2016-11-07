import React from 'react';
import MarriotMap from '../components/travel/marriot-map.jsx';
import MarriotButton from '../components/travel/marriot-button.jsx';
import AirbnbMap from '../components/travel/airbnb-map.jsx';
import AirbnbButton from '../components/travel/airbnb-button.jsx';
import InterncontinentalMap from '../components/travel/intercontinental-map.jsx';
import IntercontinentalButton from '../components/travel/intercontinental-button.jsx';


class Travel extends React.Component {
  render () {
    return (
      <div className="travel">
        <h3> Travel </h3>
        <p className="seperator"></p>
        <h5> JW Marriot </h5>
        <MarriotMap />
        <MarriotButton />
        <p className="seperator"></p>
        <h5> AirBnB </h5>
        <AirbnbMap />
        <AirbnbButton />
        <p className="seperator"></p>
        <h5> Intercontinental </h5>
        <InterncontinentalMap />
        <IntercontinentalButton />
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

module.exports = Travel;
