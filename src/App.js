import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import Header from './components/Header';
import router from './router';
import './components/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <StyleRoot>
          <div className="body">
            { router }
          </div>
        </StyleRoot>
        <footer className="footer">
          Made with ❤️ in Phoenix. → <a style={{ paddingLeft: '3px', paddingTop: '3px' }} href="https://github.com/kale-stew/mobile-portfolio" alt="checkout the git">view source</a>
        </footer>
      </div>
    );
  }
}

export default App;
