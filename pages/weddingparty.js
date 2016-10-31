import React from 'react';
import ChrisPfaff from '../components/wedding-party/chris.jsx';
import DennisOneil from '../components/wedding-party/dennis.jsx';
import JeffSeelbinder from '../components/wedding-party/jeff.jsx';
import MikeCastiglione from '../components/wedding-party/mike.jsx';
import ElenaSchoch from '../components/wedding-party/elena.jsx';
import LaurenDooley from '../components/wedding-party/dooley.jsx';
import VictoriaGarbarczyk from '../components/wedding-party/tori.jsx';
import MorganCoakley from '../components/wedding-party/morgan.jsx';


export default class WeddingParty extends React.Component {
  render () {
    return (
      <div>
        <h3> Wedding Party </h3>
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
