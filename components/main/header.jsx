import React, { Component } from 'react';

let imgUrl = './img/background-banner.png'
let backgroundStyle = {
  background: 'url('+ imgUrl + ')',
  height: '85',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  marginBottom: '35'
}

class Header extends Component {
  render() {
    return (
      <header style={backgroundStyle}></header>
    );
  }
}

module.exports = Header;
