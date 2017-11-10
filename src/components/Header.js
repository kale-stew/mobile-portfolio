import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <a className="lazy"></a>
        <a className="fullsize-nav" href="">HOME</a>
        <a className="home-icon" href="">⌂</a>
        <a className="fullsize-nav" href="http://kyliestewart.tech">PORTFOLIO SITE</a>
        <a className="lazy"></a>
        <a className="fullsize-nav" href="">CONTACT</a>
        <a className="contact-icon" href="">✍︎</a>
      </div>
    </div>
  );
}

export default Header;