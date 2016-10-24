import React from 'react';
import MainImage from '../components/main-image.jsx';
import About from '../components/about.jsx';

export default class Home extends React.Component {
  render () {
    return (
      <div>
          <h2> Home </h2>
          <MainImage />
          <About />
      </div>
    );
  }
}
