import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return <header> 
              <img src=" http://placehold.it/750x60"/>
          </header>
  }
}
ReactDOM.render(<Header/>, document.getElementById('header'));
