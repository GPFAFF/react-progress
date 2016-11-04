import React from 'react';
import ReactDOM from 'react-dom';

var imgs = [
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
    ]


export default class MainImage extends React.Component {

  getIntialState() {
    return {imgs}
  
  }
  componentDidMount() {
   var intervalId = setInterval(this.timer, 10000);
   // store intervalId in the state so it can be accessed later:
   this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
   // use intervalId from the state to clear the interval
   clearInterval(this.state.intervalId);
   console.log(clearInterval);
  }

  timer() {
   // setState method is used to update the state
   this.setState({ imgs: this.state.imgs -1 });
  }

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

