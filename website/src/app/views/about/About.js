import React, { useState } from 'react';
import { animated, useSpring, useTrail } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import aboutUsGraphic from '../../../images/about/about-us.svg';
import whiteCtcLogo from '../../../images/logo/cropped-white-ctc.svg';
import teamData from './data.json';
import animationConfig from '../animationConstants';
import './About.css';

function About() {
  const [teamViewCount, setTeamVisible] = useState(0);
  const slideUp = useSpring(animationConfig.slideUp(true));
  const grid = useTrail(
    teamData.length,
    animationConfig.fadeInStiff(teamViewCount > 0),
  );

  const profileImages = grid.map((props, index) => {
    const person = teamData[index];
    return (
      <animated.div style={props} className="person">
        <ProfileCard
          name={person.name}
          position={person.position}
          linkedinURL={person.linkedinURL}
          imageURL={person.imageURL}
        />
      </animated.div>
    );
  });

  return (
    <main>
      <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text">
          <div className="inside-top-panel-text">
            <h1 className="top-panel-title">About Us</h1>
            <p className="top-panel-description">
              Founded in 2020, Commit the Change started as a small group of
              undergraduate students with a shared love for coding and
              volunteering for causes in their communities. Today, Commit the
              Change is an established student organization at UC Irvine with a
              team of skilled designers and developers.
            </p>
            <a href="#mission" className="common-pink-button">
              Learn More
            </a>
          </div>
        </div>
        <div className="top-panel-pic">
          <img
            src={aboutUsGraphic}
            className="about-top-panel-img"
            alt="people collaborating"
          />
        </div>
      </animated.div>
      <div className="links">
        <a href="#mission">
          <h2>
            Our Mission &#62;
            <span className="off">&#62;</span>
          </h2>
        </a>
        <a href="#values">
          <h2>
            Our Values &#62;
            <span className="off">&#62;</span>
          </h2>
        </a>
        <a href="#team">
          <h2>
            The Team &#62;
            <span className="off">&#62;</span>
          </h2>
        </a>
      </div>
      <div className="our-mission-panel .tint" id="mission">
        <div className="mission-text">
          <h1>Our Mission</h1>
          <p>
            <span className="chevron">&#8250; </span>
            Deliver high-quality software for nonprofit organizations free of charge
          </p>
          <p>
            <span className="chevron">&#8250; </span>
            Promote the use of technology for social good
          </p>
          <p>
            <span className="chevron">&#8250; </span>
            Uphold our five core values in everything we do
          </p>
        </div>
        <div className="ctc-logo">
          <img src={whiteCtcLogo} alt="logo" />
        </div>
      </div>
      <div className="our-values-panel" id="values">
        <h1>Our Values &#38; Culture</h1>
        <p>
          Commit the Change understands the importance of culture and is committed to standing for these common values.
          These are not just hollow sayings, we will hold ourselves accountable to constantly improving and
          challenging ourselves through our actions and words.
        </p>
        <div className="value-row-1">
          <div className="value">
            <span role="img" aria-label="emoji">
              🤝
            </span>
            <h2>Develop Community</h2>
            <p>
              Our goal is to bring the whole organization together as one strong, helpful, and supportive community as friends
              and teammates.
            </p>
          </div>
          <div className="value">
            <span role="img" aria-label="emoji">
              🛠️
            </span>
            <h2>Build Enduring Products</h2>
            <p>
              We aim to build products that are maintainable and sustainable for long-term use. This involves high quality
              development, design, and documentation.
            </p>
          </div>
          <div className="value">
            <span role="img" aria-label="emoji">
              💗
            </span>
            <h2>Be Authentic</h2>
            <p>
              We want every member to feel safe being honest and true to their authentic self.
              Respect other members by being open to other opinions and perspectives.
            </p>
          </div>
        </div>
        <div className="value-row-2">
          <div className="value">
            <span role="img" aria-label="emoji">
              🚀
            </span>
            <h2>Take Initiative</h2>
            <p>
              We want every member to feel comfortable trying and learning new things.
              Failure is accepted and encouraged, as long as you continue to try again.
            </p>
          </div>
          <div className="value">
            <span role="img" aria-label="emoji">
              👍
            </span>
            <h2>Strive for Social Impact</h2>
            <p>
              We aim to come up with creative solutions when designing our products to make a difference in the community
              and strive to pick partnerships with organizations that need our help the most, thus making the largest impact.
            </p>
          </div>
        </div>
      </div>
      <div className="our-team-panel" id="team">
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) setTeamVisible(teamViewCount + 1);
          }}
        >
          <h1>Our Team</h1>
        </VisibilitySensor>
        <p className="our-team-description">Meet our team of hard-working designers and developers!</p>
        <div className="team-photos">{profileImages}</div>
      </div>
    </main>
  );
}

export default About;
