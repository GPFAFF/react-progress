import React, { Component } from 'react';
const Carousel = require('nuka-carousel');

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
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite: true,
      fade: true,
      cssEase: 'linear',
      arrows: true,
      pauseOnHover: true,

    };

    let imgList = imgs.map(function(imgs){
      return <img key={imgs.id} alt={imgs.name} src={imgs.src}/>
    })

    console.log(this.props)
    return (
      <div className="mainImage">
        <Carousel className="images" {...settings}>
         {imgList}
        </Carousel>
      </div>
    );
  }
}

module.exports = MainImage;

