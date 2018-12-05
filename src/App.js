import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './Home'
import './App.css';
import about from './about'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
          <Route exact path="" component={Home} />
          <Route exact path="/about" component={about} />
          </div>
      </div>
    );
  }
}

export default App;
