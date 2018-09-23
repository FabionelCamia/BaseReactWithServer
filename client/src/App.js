import React, { Component } from 'react';
import './App.css';

class App extends Component {



  render() {
    fetch('/api/courses')
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Work with JSON data here
        console.log(data);
      })
      .catch(err => {
        // Do something for an error here
      });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
