import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, TalkIcon } from './icons';
import './styles/Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <a className="lazy"></a>
        <Link to="/"><div className="fullsize-nav" href="">HOME</div></Link>
        <div></div><Link to="/"><HomeIcon width='35px' height='35px'/></Link>
        <a className="fullsize-nav" href="http://kyliestewart.tech">PORTFOLIO SITE</a>
        <a className="lazy"></a>
        <Link to="/talk"><div className="fullsize-nav" href="">HIRE ME</div></Link>
        <div></div><Link to="/talk"><TalkIcon width='35px' height='35px'/></Link>
      </div>
    </div>
  );
}

export default Header;