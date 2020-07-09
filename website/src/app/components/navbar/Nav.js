import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to="/">CtC Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/contact" className="link">Contact Us</Link>
        
    </nav>
  );
}

export default Nav;

