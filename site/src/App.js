import React, { Component } from 'react';
import logo from './logo.svg';
import DenseAppBar from './components/DenseAppBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <DenseAppBar/>
      </div>
    );
  }
}

export default App;
