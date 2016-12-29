import React from 'react';
import { Link } from 'react-router';

class AmazonButton extends React.Component {
  render () {
    return (
      <div className="registry-section">
        
        <div className="registry-company-picture">
          <img className="registry-picture" alt="company picture" src="./img/amazon.png"/>
        </div>

        <a className="registry button" target="_blank" href="https://www.amazon.com/wedding/greg-pfaff-cori-tanck-austin-april-2017/registry/26ZWF5TIH8E5M">Amazon</a>

        
      </div>
    );
  }
}

module.exports = AmazonButton;
