import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Header from './components/Header';
import './App.css';

const styles = {
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class App extends Component {
  render() {
    return (
      <StyleRoot>
      <div className="app-container">
        <Header />
        <div className="body">
          <h1 className="reveal-text">Kylie Stewart</h1>
          <div className="aboutme">
            <p></p>
          </div>
          <div className="welcome" style={styles.fadeIn}>
            <div className="welcome-div">
              <h2>Should I Hike Today?</h2>
              <p>More about this thing</p></div>
            <div className="welcome-div">
              <h2>Machine Learning 101</h2>
              <p>More about this thing</p></div>
              <div className="welcome-div">
              <h2>Locus: News Aggregator</h2>
              <p>More about this thing</p></div>
            <div className="welcome-div">
              <h2>Responsive Web Design</h2>
              <p>More about this thing</p></div>
            <div className="welcome-div">
              <h2>React-Native in Action</h2>
              <p>More about this thing</p></div>
            <div className="welcome-div">
              <h2>Purple Blue Green</h2>
              <p>More about this thing</p></div>
          </div>
          <div className="space"></div>
        </div>
        <footer className="footer">
          Made with ❤️ in Phoenix. → <a style={{ paddingLeft: '3px' }} href="https://github.com/kale-stew/mobile-portfolio" alt="checkout the git">view source</a>
        </footer>
      </div>
      </StyleRoot>
    );
  }
}

export default App;
