import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

const tweenFunctions = require('tween-functions');

let imgs = [
  {
    id: 1,
    name: 'cori and gregs',
    src: "./img/gregandcori.jpg"
  },
  {
    id: 2,
    name: 'cori and greg',
    src: "./img/gregandcori-3.jpg"
  },
  {
    id: 3,
    name: 'cori and greg',
    src: "./img/gregandcori-4.jpg"
  },
  {
    id: 4,
    name: 'cori and greg',
    src: "./img/gregandcori-6.jpg"
  }
];

class MainImage extends Component {


  render() {
    let imgList = imgs.map(function(imgs){
      return <img onLoad={() => {window.dispatchEvent(new Event('resize'))}} key={imgs.id} alt={imgs.name} src={imgs.src}/>
    })

    console.log("image instatiation");

    return (
      <div className="mainImage">
        <Carousel easing={'tweenFunctions.easeInQuad(1, 0, 50, 5)'} autoplay={true} speed={1500} wrapAround={true}>
         {imgList}
        </Carousel>
      </div>
    );
  }
}

module.exports = MainImage;

