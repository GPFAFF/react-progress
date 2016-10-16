import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  render() {
    return <nav> 
             <a href="#"> Home </a>
             <a href="#"> Events </a>
             <a href="#"> Wedding Party </a>
             <a href="#"> Travel </a>
             <a href="#"> Gift Registry </a>
           </nav>
  }
}

ReactDOM.render(<Nav/>, document.getElementById('nav'));
