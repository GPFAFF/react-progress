import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render() {
    return <footer> 
              <a href="http://gregpfaff.com"> Built with love by Greg Pfaff and Cori Tanck </a>
          </footer>
  }
}
ReactDOM.render(<Footer/>, document.getElementById('footer'));
