import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="header">
          <a className="fullsize-nav" href="">HOME</a>
          <a className="home-icon" href=""></a>
          <a className="fullsize-nav" href="">PORTFOLIO SITE</a>
          <a className="fullsize-nav" href="">CONTACT</a>
          <a className="contact-icon" href=""></a>
        </header>
        <div className="body">
          <h1 className="reveal-text">Kylie Stewart</h1>
          <div className="aboutme">
            <p></p>
          </div>
          <div className="welcome">
            <div className="welcome-div">
              <h2>Should I Hike Today?</h2>
              <p>More about me</p></div>
            <div className="welcome-div">
              <h2>Locus: News Aggregator</h2>
              <p>More about me</p></div>
            <div className="welcome-div">
              <p>More about me</p></div>
            <div className="welcome-div">
              <p>More about me</p></div>
            <div className="welcome-div">
              <p>More about me</p></div>
            <div className="welcome-div">
              <p>More about me</p></div>
          </div>
          <div className="space"></div>
        </div>
        <footer className="footer">
          Made with ❤️ in Phoenix. → <a style={{ paddingLeft: '3px' }} href="https://github.com/kale-stew/mobile-portfolio" alt="checkout the git">view source</a>
        </footer>
      </div>
    );
  }
}

export default App;
