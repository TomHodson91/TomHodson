import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="bg">
        <div className='banner'>
          <div className='links'>
            Home
          </div>
          <div className='links'>
            About Me
          </div>
          <div className='links'>
            Projects
          </div>
          <div className='links'>
            Contact Me
          </div>
        </div>
        <div className='title'>
          Hi, I'm Tom. I'm 21 years old and this is my first ever website!
        </div>
      </div>
      </div>
    );
  }
}

export default App;
