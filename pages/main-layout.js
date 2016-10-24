import React from 'react';
import Navigation from '../components/nav.jsx';
import Main from '../components/main.jsx';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import { Link } from 'react-router';

export default class MainLayout extends React.Component {
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
