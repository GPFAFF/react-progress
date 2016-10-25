import React from 'react';
import ReactDOM from 'react-dom';

let imgUrl = './img/background-banner.png'
let backgroundStyle = {
  background: 'url('+ imgUrl + ')',
  height: '85',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  marginBottom: '35'
}
export default class Header extends React.Component {
  render() {
    return (
      <header style={backgroundStyle}></header>
    );
  }
}
