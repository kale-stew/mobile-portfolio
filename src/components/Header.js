import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, TalkIcon } from './icons';
import './styles/Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link to="/"><div className="fullsize-nav">HOME</div></Link>
        <div className="mobile-nav">
          <Link to="/"><HomeIcon width='35px' height='35px'/></Link>
        </div>
        <a className="fullsize-nav" href="http://kyliestewart.tech">
          PORTFOLIO SITE</a>
        <div className="mobile-nav">
          <Link to="/talk"><TalkIcon width='35px' height='35px'/></Link>
        </div>
        <Link to="/talk"><div className="fullsize-nav">HIRE ME</div></Link>
      </div>
    </div>
  );
}

export default Header;