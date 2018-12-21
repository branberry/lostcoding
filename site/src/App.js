import React, { Component } from 'react';
import logo from './logo.svg';
import DenseAppBar from './components/DenseAppBar'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './components/About'
import Index from './components/Index';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <DenseAppBar/>
          <Route path="/" exact component={Index}/>
          <Route path="/about/" component={About}/>
        </div>
      </Router>

    );
  }
}

export default App;
