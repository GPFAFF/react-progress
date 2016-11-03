import React from 'react';
import ReactDOM from 'react-dom';

const imgs = [
  {
    id: 1,
    name: 'cori and greg',
    src: "./img/gregandcori.jpg"
  },
  {
    id: 2,
    name: 'tribe1',
    src: "https://pbs.twimg.com/media/CwLvxW7UsAA7qdQ.jpg"
  },
  {
    id: 3,
    name: "tribe2",
    src: "http://www3.pictures.zimbio.com/gi/Boston+Red+Sox+v+Cleveland+Indians+rF2MRcx_gYrx.jpg"
  },
  {
    id: 4,
    name: "tribe3",
    src: "http://cleveland.indians.mlb.com/cle/images/fan_forum/y2016/wallpapers/desktop/2560x1440/alds_1.jpg"
  }
];

export default class MainImage extends React.Component {

  render() {
    return (
      <div className="mainImage">
        {imgs.map(function(imgs){
          return <img key={imgs.id} alt={imgs.name} src={imgs.src}/>
        })}
      </div>
    );       
  }
}

