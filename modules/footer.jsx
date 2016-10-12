import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render() {
    return <footer> This is a footer
              <a href="http://gregpfaff.com"> Built By Greg Pfaff </a>
          </footer>
  }
}
ReactDOM.render(<Footer/>, document.getElementById('footer'));
