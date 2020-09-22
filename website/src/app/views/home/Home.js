import React, { useState } from 'react';
import './Home.css';
import { animated, useSpring, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import animationConfig from '../animationConstants';
import Timeline from '../../components/Timeline/Timeline';
import homeLandingPic from '../../../images/home/home-top-panel.svg';

function Home() {
  const [middleViewCount, setMiddleVisible] = useState(0);
  const [bottomViewCount, setBottomVisible] = useState(0);
  const [bottomButtonViewCount, setBottomButtonVisible] = useState(0);

  // todo: make these into components
  const socialMediaList = [
    <a
      href="https://www.facebook.com/ctc.uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-facebook-square fa-4x" />
      <p id="link-name">Facebook</p>
    </a>,
    <a
      href="https://www.instagram.com/ctc.uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-instagram fa-4x" />
      <p id="link-name">Instagram</p>
    </a>,
    <a
      href="https://www.linkedin.com/company/commit-the-change-uci/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-linkedin-square fa-4x" />
      <p id="link-name">Linkedin</p>
    </a>,
    <a
      href="https://medium.com/@committhechange.uci"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-medium fa-4x" />
      <p id="link-name">Medium</p>
    </a>,
  ];

  const slideUp = useSpring(animationConfig.slideUp(true));
  const fadeInMiddle = useSpring(animationConfig.fadeIn(middleViewCount > 0));
  const fadeInBottom = useSpring(animationConfig.fadeIn(bottomViewCount > 0));
  const trail = useTrail(
    socialMediaList.length,
    animationConfig.trail(middleViewCount > 0),
  );
  const popButtons = useSpring(
    animationConfig.slideUp(bottomButtonViewCount > 0),
  );

  const socialMediaLinks = trail.map((props, index) => (
    <animated.a className="social-media-link" style={props}>
      {socialMediaList[index]}
    </animated.a>
  ));

  return (
    <main>
      <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text">
          <div className="inside-top-panel-text">
            <h1 className="top-panel-title">Commit the Change</h1>
            <p className="top-panel-description">
              We are an organization at UC Irvine that delivers high quality
              software for non-profit organizations while providing meaningful
              opportunities for students to develop tech with purpose.
            </p>
            <a
              href="https://medium.com/@committhechange.uci/what-is-commit-the-change-uci-e389de8d1ab0"
              className="common-pink-button"
              target="_blank"
              rel="noopener noreferrer"
            >
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
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) setMiddleVisible(middleViewCount + 1);
            }}
          >
            <animated.div style={fadeInMiddle}>
              <h2>Connect With Us!</h2>
              <p>
                Stay in the loop with us on our mission to create
                <br />
                <b>Tech With Purpose.</b>
              </p>
            </animated.div>
          </VisibilitySensor>
          <div className="media-links">{socialMediaLinks}</div>
        </div>
      </div>
      <div className="bottom-panel">
        <div className="purple-tint">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) setBottomVisible(bottomViewCount + 1);
            }}
          >
            <animated.div style={fadeInBottom}>
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
            </animated.div>
          </VisibilitySensor>
          <Timeline />
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) setBottomButtonVisible(bottomButtonViewCount + 1);
            }}
          >
            <animated.div style={popButtons} className="buttons">
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
            </animated.div>
          </VisibilitySensor>
        </div>
      </div>
    </main>
  );
}

export default Home;
