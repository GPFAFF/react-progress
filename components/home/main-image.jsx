import React, { Component } from 'react';

var imgs = [
  {
    id: 1,
    name: 'cori and greg',
    src: "./img/gregandcori.jpg"
  }
];

class MainImage extends Component {

  render() {
    console.log(this.props)
    return (

      <div className="mainImage">
        {imgs.map(function(imgs){
          return <img key={imgs.id} alt={imgs.name} src={imgs.src}/>
        })}
      </div>
    );       
  }
}

module.exports = MainImage;

