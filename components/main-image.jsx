import React from 'react';
import ReactDOM from 'react-dom';

class MainImage extends React.Component {
  render() {
    return (
      <img src=" http://placehold.it/450x460"/>
    );       
  }
}
ReactDOM.render(<MainImage/>, document.getElementById('main-image'));
