import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Entry from './EntryPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={Entry} exact={true} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;