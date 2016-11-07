import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render () {
    return (
      <div className="navigation">
        <Link to="/home" activeClassName="active">Home</Link>
        <Link to="events" activeClassName="active">Events</Link>
        <Link to="weddingparty" activeClassName="active">Wedding Party</Link>
        <Link to="travel" activeClassName="active">Travel</Link>
        <Link to="registry" activeClassName="active">Registry</Link>
      </div>
    );
  }
}

module.exports = Navigation;
