import React, { Component } from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './App.css';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class App extends Component {
  render() {
    return (
      <StyleRoot>
      <div className="app-container">
        <header className="header">
          <a className="lazy"></a>
          <a className="fullsize-nav" href="">HOME</a>
          <a className="home-icon" href="">⌂</a>
          <a className="fullsize-nav" href="">PORTFOLIO SITE</a>
          <a className="lazy"></a>
          <a className="fullsize-nav" href="">CONTACT</a>
          <a className="contact-icon" href="">✍︎</a>
        </header>
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
