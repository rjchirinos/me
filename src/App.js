import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={process.env.PUBLIC_URL} component={Home} />
      </Router>
    );
  }
}

export default App;
