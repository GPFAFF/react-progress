import React from 'react';
import ChrisPfaff from '../components/chris.jsx';
import DennisOneil from '../components/dennis.jsx';
import JeffSeelbinder from '../components/jeff.jsx';
import MikeCastiglione from '../components/mike.jsx';
import ElenaSchoch from '../components/elena.jsx';
import LaurenDooley from '../components/dooley.jsx';
import VictoriaGarbarczyk from '../components/tori.jsx';
import MorganCoakley from '../components/morgan.jsx';


export default class WeddingParty extends React.Component {
  render () {
    return (
      <div>
        <h2> Wedding Party </h2>
        <p className="seperator"></p>
        
        <ChrisPfaff />
        <p className="seperator"></p>

        <DennisOneil />
        <p className="seperator"></p>

        <JeffSeelbinder />
        <p className="seperator"></p>

        <MikeCastiglione />
        <p className="seperator"></p>

        <ElenaSchoch />
        <p className="seperator"></p>

        <VictoriaGarbarczyk />
        <p className="seperator"></p>

        <LaurenDooley />
        <p className="seperator"></p>

        <MorganCoakley />
        <p className="seperator"></p>

      </div>
    );
  }
}
