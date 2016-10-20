import React from 'react';
import { Link } from 'react-router';

export default class MainLayout extends React.Component {
  render () {
    return (
      <section>
        <h1> Cori Tanck &amp; Greg Pfaff </h1>
        <nav>
          <ul>
            <Link to="home">Home</Link>
            <Link to="events">Events</Link>
            <Link to="weddingparty">Wedding Party</Link>
            <Link to="travel">Travel</Link>
            <Link to="registry">Gift Registry</Link>
            {this.props.children}
          </ul>
        </nav>
      </section>
    );
  }
}
