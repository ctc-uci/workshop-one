import React from 'react';
import './Home.css';
import { animated, useSpring } from 'react-spring';
import animationConfig from '../animationConstants';
import Timeline from '../../components/Timeline/Timeline';
import homeLandingPic from '../../../images/home/home-top-panel.svg';
import tempHome from '../../../images/home/temp-home.svg';

function Home() {
  const slideUp = useSpring(animationConfig);

  return (
    <main>
      <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text">
          <div className="inside-top-panel-text">
            <h1 className="top-panel-title">Commit the Change</h1>
            <p className="top-panel-description">
              We are a student organization at UC Irvine focused on delivering
              high quality software for nonprofit organizations free of charge
              and promoting technology for social good in our community.
            </p>
            <a href="/about" className="common-pink-button">
              Learn More
            </a>
          </div>
        </div>
        <div className="top-panel-pic">
          <img
            src={homeLandingPic}
            className="home-top-panel-img"
            alt="Person"
          />
        </div>
      </animated.div>
      <div className="social-media-section">
        <div className="media-content">
          <h2>Connect With Us!</h2>
          <p>
            Stay in the loop with us on our mission to create
            <br />
            <b>Tech With Purpose.</b>
          </p>
          <div className="media-links">
            <a
              href="https://www.facebook.com/ctc.uci/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fa fa-facebook-square fa-4x" />
              <p id="link-name">Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/ctc.uci/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fa fa-instagram fa-4x" />
              <p id="link-name">Instagram</p>
            </a>
            <a
              href="https://www.linkedin.com/company/commit-the-change-uci/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fa fa-linkedin-square fa-4x" />
              <p id="link-name">Linkedin</p>
            </a>
            <a
              href="https://medium.com/@committhechange.uci"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-link"
            >
              <i className="fa fa-medium fa-4x" />
              <p id="link-name">Medium</p>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-panel" style={{ background: `url(${tempHome})` }}>
        <h2>STUDENTS</h2>
        <p className="join-team">Want to join the team?</p>
        <p className="interested">
          Interested in using your skills in
          {' '}
          <b>programming</b>
          {' '}
          or
          {' '}
          <b>design</b>
          {' '}
          on projects that help non-profit organizations?
          <br />
          Join Commit the Change!
        </p>
        <Timeline />
        <div className="buttons">
          <a
            href="/projects#middle-our-work"
            className="timeline-btn projects-btn"
          >
            View Projects
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdhMFr1ZT8J5ENi2uEe62L54w-hNH8aVIAQLMDNqvPgWkhsWg/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="timeline-btn apply-btn"
          >
            Apply Here!
          </a>
        </div>
      </div>
    </main>
  );
}

export default Home;
