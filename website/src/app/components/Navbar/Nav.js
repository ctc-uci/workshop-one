import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import ctcLogo from '../../../images/purple-ctc.svg';

function Nav() {
  return (
    <nav>
      <div className="nav-bar">
        <div clasName="left">
          <Link to="/">
            <img className="logo" src={ctcLogo} alt="ctc logo" />
          </Link>
        </div>
        <ul className="navigation">
          <li>
            <Link to="/about" className="elem">About</Link>
          </li>
          <li>
            <Link to="/projects" className="elem">Our Work</Link>
          </li>
          <li>
            <button type="button" className="elem apply-button">
              <Link to="/contact" className="apply-link">Apply Now</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
