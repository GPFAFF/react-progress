import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  render () {
    return (
      <ul>
        <Link to="home" activeClassName="active">Home</Link>
        <Link to="events" activeClassName="active">Events</Link>
        <Link to="weddingparty" activeClassName="active">Wedding Party</Link>
        <Link to="travel" activeClassName="active">Travel</Link>
        <Link to="registry" activeClassName="active">Registry</Link>
      </ul>
    );
  }
}
