import React, { Component } from 'react';
import Navigation from '../components/main/nav.jsx';
import Main from '../components/main/main.jsx';
import Footer from '../components/main/footer.jsx';
import Header from '../components/main/header.jsx';
import { Link } from 'react-router';

class MainLayout extends Component {
  render () {
    return (

      <div>
        <Header />
        <Main />
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

module.exports = MainLayout;
