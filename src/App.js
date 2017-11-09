import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="header">
          <a href="">ABOUT</a>
          <a href="">PROJECTS</a>
          <a href="">CONTACT</a>
        </header>
        <div className="body">
          <h1 className="title">Kylie Stewart</h1>
          <div className="welcome">
            <div className="welcome-div">
              <p>More about me</p></div>
            <div className="welcome-div">
              <p>More about me</p></div>
            <div className="welcome-div">
              <p>More about me</p></div>
          </div>

          <div className="welcome">
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
          Made with ❤️ in Phoenix. - view source
        </footer>
      </div>
    );
  }
}

export default App;
