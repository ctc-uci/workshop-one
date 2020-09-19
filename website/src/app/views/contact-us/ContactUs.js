import React from 'react';
import './ContactUs.css';
import { animated, useSpring } from 'react-spring';
import animationConfig from '../animationConstants';
import ContactUsData from './ContactUs.json';
import contactUsImage from '../../../images/contactUs/contact-us-header.svg';
import purpleLogo from '../../../images/contactUs/purple_ctc 2.svg';

function ContactUs() {
  const slideUp = useSpring(animationConfig.slideUp(true));

  return (
    <div className="contact-us-page">
      <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text contact-mobile">
          <div className="inside-top-panel-text">
            <h3 className="contact-us-students">STUDENTS</h3>
            <h1 className="top-panel-title">
              {ContactUsData.topThird.titleText}
            </h1>
            <p className="top-panel-description">
              {ContactUsData.topThird.description}
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhMFr1ZT8J5ENi2uEe62L54w-hNH8aVIAQLMDNqvPgWkhsWg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="common-pink-button"
            >
              Apply Here
            </a>
          </div>
        </div>
        <div className="top-panel-pic">
          <img src={contactUsImage} alt="undraw" className="contact-us-top-panel-img" />
        </div>
      </animated.div>
      <div id="contact-us-middle-third">
        <div className="contact-us-middle-items">
          <img src={purpleLogo} alt="undraw" className="heart-logo" />
          <div className="middle-third-info">
            <h3 className="middle-contact-header">
              {ContactUsData.middleThird.header}
            </h3>
            <h1 className="middle-contact-title">
              {ContactUsData.middleThird.topTitle}
            </h1>
            <p>{ContactUsData.middleThird.topDescription}</p>
            <p>{ContactUsData.middleThird.bottomDescription}</p>
            <a
              href="mailto:committhechange.uci@gmail.com"
              className="common-pink-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div id="contact-us-bottom-third">
        <div className="contact-us-bottom-third-items">
          <div className="bottom-third-info">
            <h3>{ContactUsData.bottomThird.header}</h3>
            <h1>{ContactUsData.bottomThird.titleText}</h1>
            <p>{ContactUsData.bottomThird.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
