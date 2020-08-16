import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ctcLogo from '../../../images/logo-white-no-words.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="left-column">
          <div className="inner-left">
            Copyright Commit the Change
            <br />
            Illustrations from undraw.co
            <br />
            Created in Irvine, CA
            <br />
            Est. 2020
          </div>
        </div>
        <div className="middle-column">
          <img className="logo" src={ctcLogo} alt="ctc logo" />
          <h2>Tech with Purpose.</h2>
          <a href="mailto:committhechange.uci@gmail.com" target="_top">
            <i className="fa fa-envelope fa-lg" />
          </a>
          <a href="mailto:committhechange.uci@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-square fa-lg" />
          </a>
          <a href="mailto:committhechange.uci@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram fa-lg" />
          </a>
          <a href="mailto:committhechange.uci@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square fa-lg" />
          </a>
          <a href="mailto:committhechange.uci@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-medium fa-lg" />
          </a>
        </div>
        <div className="right-column">
          <div className="inner-right">
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="/projects">Our Work</Link>
            <br />
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
