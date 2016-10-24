import React from 'react';
import ReactDOM from 'react-dom';

let imgUrl = './img/background.jpg'
let backgroundStyle = {
  background: 'url('+ imgUrl + ')',
  height: '100',
}
export default class Header extends React.Component {
  render() {
    return (
      <header style={backgroundStyle}></header>
    );
  }
}
