import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  render() {
    return <nav> Navigation
             <a href="#"> One </a>
             <a href="#"> TWo </a>
             <a href="#"> Three </a>
             <a href="#"> Four </a>
           </nav>
  }
}

ReactDOM.render(<Nav/>, document.getElementById('nav'));
