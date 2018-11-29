import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from './Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="" component={Home} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
