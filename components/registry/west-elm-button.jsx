import React from 'react';
import { Link } from 'react-router';

class WestElmButton extends React.Component {
  render () {
    return (
      <div className="registry-section">
        <h5> West Elm </h5>
        <a className="registry-button" target="_blank" href="http://westelm.com">West Elm</a>
        
        <div className="registry-company-picture">
          <img className="registry-picture" alt="company picture" src="./img/west-elm.jpg"/>
        </div>

        <div className="registry-details">
          <p> Bacon ipsum dolor amet ham hock capicola pork loin short ribs pork belly bacon shank, andouille brisket doner pancetta cow boudin. Landjaeger andouille fatback drumstick, chicken pork chop beef ribs pancetta tail pork short ribs pastrami. Kevin shank alcatra, short ribs meatloaf leberkas pastrami. Kevin ball tip picanha leberkas hamburger pork loin jerky tail boudin. Tail shoulder prosciutto pig tri-tip shankle meatloaf bresaola pastrami jerky chicken. Kevin chuck bresaola jerky. </p>
        </div>

      </div>
    );
  }
}

module.exports = WestElmButton;
