import React, { Component } from 'react';
import MainImage from '../components/home/main-image.jsx';
import About from '../components/home/about.jsx';

class Home extends Component {
  render () {
    return (
      <div>
          <h3> Home </h3>
          <MainImage />
          <About />
      </div>
    );
  }
}

module.exports = Home;
