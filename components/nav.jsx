import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


var Nav = React.createClass ({
  render: function() {
    return (
      <nav> 
        <ul>
          <Link to="events">Events</Link>
          <Link to="wedding-party">Wedding Party</Link>
          <Link to="travel">Travel</Link>
          <Link to="registry">Gift Registry</Link>
          {this.props.children}
       </ul>
     </nav>
    )
  }
})
