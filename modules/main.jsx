import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render () {
    return  <section>
              <h2> Cori Tanck </h2>
              <small> and </small>
              <h2> Greg Pfaff </h2>
            </section>

  }
}

ReactDOM.render(<Main />, document.getElementById('main'));
