import React from 'react';
import { Link } from 'react-router';

class AnthropologieButton extends React.Component {
  render () {
    return (
      <div className="registry-section">

        <div className="registry-company-picture">
          <img className="registry-picture anthro" alt="company picture" src="./img/anthro.svg"/>
        </div>
        
        <a className="registry button" target="_blank" href="
https://www.anthropologie.com/registry/listing?registryId=NZAYZDQ4ODFL">Anthropologie</a>
        
      </div>
    );
  }
}

module.exports = AnthropologieButton;
