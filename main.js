import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Styles from './styles/main.css';


// Components

/*import Header from './modules/header.jsx';
import Main from './modules/main.jsx';
import Nav from './modules/nav.jsx';
import MainPhoto from './modules/main-image.jsx';
import About from './modules/about.jsx';
import Footer from './modules/footer.jsx';
import Styles from './styles/main.css';*/

// Pages

import MainLayout from "./pages/main-layout.js"
import Home from './pages/home.js'
import Events from "./pages/events.js"
import WeddingParty from "./pages/weddingparty.js"
import Travel from "./pages/travel.js"
import Registry from "./pages/registry.js"

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="home" component={Home}></Route>
      <Route path="events" component={Events}></Route>
      <Route path="weddingparty" component={WeddingParty}></Route>
      <Route path="travel" component={Travel}></Route>
      <Route path="registry" component={Registry}></Route>
    </Route>
  </Router>, 
app);
