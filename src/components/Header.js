import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <a className="lazy"></a>
        <Link to="/"><div className="fullsize-nav" href="">HOME</div></Link>
        <Link to="/"><div className="home-icon" href="">⌂</div></Link>
        <a className="fullsize-nav" href="http://kyliestewart.tech">PORTFOLIO SITE</a>
        <a className="lazy"></a>
        <Link to="/talk"><div className="fullsize-nav" href="">CONTACT</div></Link>
        <Link to="/talk"><div className="contact-icon" href="">✍︎</div></Link>
      </div>
    </div>
  );
}

export default Header;