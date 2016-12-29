import React from 'react';

class ChrisPfaff extends React.Component {
  render () {
    return (
      <div className="wedding-party">
        <div className="wedding-party-information">
          <h3> Chris Pfaff </h3>
          <h5> Best Man </h5>
        </div>

        <div className="wedding-party-picture">
          <img className="wedding-picture" alt="wedding photo portrait" src="./img/chris.jpg"/>
        </div>
      </div>
    )
  }
}

module.exports = ChrisPfaff;
