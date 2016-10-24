import React from 'react';
import MainImage from '../components/main-image.jsx';
import About from '../components/about.jsx';

export default class Home extends React.Component {
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
