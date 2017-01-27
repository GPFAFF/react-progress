import React, { Component } from 'react';
const Slider = require('react-slick');

var imgs = [
  {
    id: 1,
    name: 'cori and gregs',
    src: "./img/gregandcori.jpg"
  },
  {
    id: 2,
    name: 'cori and greg',
    src: "./img/gregandcori-2.jpg"
  },
  {
    id: 3,
    name: 'cori and greg',
    src: "./img/gregandcori-3.jpg"
  },
  {
    id: 4,
    name: 'cori and greg',
    src: "./img/gregandcori-4.jpg"
  },
  {
    id: 5,
    name: 'cori and greg',
    src: "./img/gregandcori-5.jpg"
  },
  {
    id: 6,
    name: 'cori and greg',
    src: "./img/gregandcori-6.jpg"
  },
  {
    id: 7,
    name: 'cori and greg',
    src: "./img/gregandcori-7.jpg"
  }
];

class MainImage extends Component {

  render() {
    const settings = {
      dots: false,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true
    };

    console.log(this.props)
    return (

      <div className="mainImage">
        <Slider {...settings}>
          {imgs.map(function(imgs){
            console.log(imgs);
            return <img key={imgs.id} alt={imgs.name} src={imgs.src}/>
          })}
        </Slider>
      </div>
    );
  }
}

module.exports = MainImage;

