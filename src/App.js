import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Home />
        <footer className="footer">
          Made with ❤️ in Phoenix. → <a style={{ paddingLeft: '3px' }} href="https://github.com/kale-stew/mobile-portfolio" alt="checkout the git">view source</a>
        </footer>
      </div>
    );
  }
}

export default App;
