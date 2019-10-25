import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

/* eslint-disable */

class App extends Component {
  render() {
  /*  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>content</div>
      </div>
    );*/

    return (
      <div>
      123
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        <button style={{backgroundColor: 'blue', color:'white'}}>Submit</button>
      </div>
    );
  }
}

export default App;
