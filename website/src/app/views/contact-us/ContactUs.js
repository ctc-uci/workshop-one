import React, { useState } from 'react';
import './ContactUs.css';
import { animated, useSpring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import animationConfig from '../animationConstants';
import ContactUsData from './ContactUs.json';
import QuestionData from './FAQ.json';
import Question from '../../components/Question/Question';
import contactUsImage from '../../../images/contactUs/contact-us-header.svg';
import purpleLogo from '../../../images/contactUs/purple_ctc 2.svg';

function ContactUs() {
  const slideUp = useSpring(animationConfig.slideUp(true));
  const [middleViewCount, setMiddleVisible] = useState(0);
  const slideUpInactiveNpo = useSpring(
    animationConfig.fadeIn(middleViewCount > 0),
  );

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

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
          <img
            src={contactUsImage}
            alt="undraw"
            className="contact-us-top-panel-img"
          />
        </div>
      </animated.div>

      <div className="contact-us-middle-third">
        <div className="contact-us-middle-items">
          <img src={purpleLogo} alt="undraw" className="heart-logo" />
          <animated.div
            style={slideUpInactiveNpo}
            className="middle-third-info"
          >
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible) setMiddleVisible(middleViewCount + 1);
              }}
            >
              <h3 className="middle-contact-header">
                {ContactUsData.middleThird.header}
              </h3>
            </VisibilitySensor>
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
          </animated.div>
        </div>
      </div>

      <div className="contact-us-bottom-third">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="contact-us-bottom-third-items">
          {QuestionData.map((el, index) => (
            <Question
              index={index}
              key={index.toString()}
              questionText={el.question}
              answerText={el.answer}
              expanded={index === expandedIndex}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
