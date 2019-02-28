import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectButton from './components/ProjectButton';
import './App.css';

class App extends Component {
  render() {
    const baseURL = process.env.PUBLIC_URL;

    return (
      <Router>
        <React.Fragment>
          <Route path={baseURL} component={ProjectButton} />
          <Route exact path={baseURL} component={Home} />
          <Route exact path={`${baseURL}/about`} component={About} />
          <Route exact path={`${baseURL}/work`} component={Work} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
