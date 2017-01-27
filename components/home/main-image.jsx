import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

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

  constructor(props) {
    super(props);


  }

  render() {
    let imgList = imgs.map(function(imgs){
      return <img onLoad={() => {window.dispatchEvent(new Event('resize'))}} key={imgs.id} alt={imgs.name} src={imgs.src}/>
    })

    console.log("image instatiation");

    return (
      <div className="mainImage">
        <Carousel autoplay={true} speed={400} wrapAround={true}>
         {imgList}
        </Carousel>
      </div>
    );
  }
}

module.exports = MainImage;

