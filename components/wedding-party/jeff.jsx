import React from 'react';

class JeffSeelbinder extends React.Component {
  render () {
    return (
      <div className="wedding-party">
        <div className="wedding-party-information">
          <h3> Jeff Seelbinder </h3>
          <h5> Groomsman </h5>
          <p> Bacon ipsum dolor amet ham hock capicola pork loin short ribs pork belly bacon shank, andouille brisket doner pancetta cow boudin. Landjaeger andouille fatback drumstick, chicken pork chop beef ribs pancetta tail pork short ribs pastrami. Kevin shank alcatra, short ribs meatloaf leberkas pastrami. Kevin ball tip picanha leberkas hamburger pork loin jerky tail boudin. Tail shoulder prosciutto pig tri-tip shankle meatloaf bresaola pastrami jerky chicken. Kevin chuck bresaola jerky. </p>
        </div>

        <div className="wedding-party-picture">
          <img className="wedding-picture" alt="wedding photo portrait" src="./img/jeff.jpg"/>
        </div>
      </div>
    )
  }
}

module.exports = JeffSeelbinder;
