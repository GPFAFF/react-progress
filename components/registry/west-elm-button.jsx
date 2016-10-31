import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class WestElmButton extends React.Component {
  render () {
    return (
      <div className="registry-section">      
        <a className="registry-button" target="_blank" href="http://westelm.com">West Elm</a>
        
        <div className="registry-company-picture">
          <img className="registry-picture" alt="company picture" src="http://placehold.it/100x100"/>
        </div>

        <div className="registry-details">
          <p> Bacon ipsum dolor amet ham hock capicola pork loin short ribs pork belly bacon shank, andouille brisket doner pancetta cow boudin. Landjaeger andouille fatback drumstick, chicken pork chop beef ribs pancetta tail pork short ribs pastrami. Kevin shank alcatra, short ribs meatloaf leberkas pastrami. Kevin ball tip picanha leberkas hamburger pork loin jerky tail boudin. Tail shoulder prosciutto pig tri-tip shankle meatloaf bresaola pastrami jerky chicken. Kevin chuck bresaola jerky. </p>
        </div>

      </div>
    );
  }
}
