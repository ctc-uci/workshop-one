import React from 'react';
import './ContactUs.css';
import ContactUsData from './ContactUs.json';
import placeholder from '../../../images/undraw_placeholder.png';
import downArrow from '../../../images/down_arrow.png';

function ContactUs() {
  return (
    <div className="contact-us-page">
      <div className="contact-us-upper-third">
        <div className="contact-us-upper-third-items">
          <img src={placeholder} alt="undraw" className="contact-us-img" />
          <div className="contact-us-info">
            <h1>{ContactUsData.topThird.titleText}</h1>
            <p>{ContactUsData.topThird.description}</p>
          </div>
        </div>
        <a href="#contact-us-middle-third" className="scroll_one">
          <img alt="scroll" src={downArrow} className="down-arrow" />
        </a>
      </div>
      <div id="contact-us-middle-third">
        <div className="contact-us-middle-items">
          <div className="middle-third-info">
            <h3>{ContactUsData.middleThird.header}</h3>
            <h1>
              {ContactUsData.middleThird.topTitle}
              <br />
              {ContactUsData.middleThird.bottomTitle}
            </h1>
            <p>{ContactUsData.middleThird.topDescription}</p>
            <p>{ContactUsData.middleThird.bottomDescription}</p>
          </div>
          <img src={placeholder} alt="undraw" className="contact-us-img" />
        </div>
        <a href="#contact-us-bottom-third" className="scroll_one">
          <img alt="scroll" src={downArrow} className="down-arrow" />
        </a>
      </div>
      <div id="contact-us-bottom-third">
        <div className="contact-us-bottom-third-items">
          <img src={placeholder} alt="undraw" className="contact-us-img" />
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
