import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import collaborationGraphic from '../../../images/collaboration-graphic.svg';
import './About.css';

function About() {
  return (
    <main>
      <div className="top-panel">
        <div className="panel-left">
          <h1>About Us</h1>
          <p>
            Founded in 2019, Commit the Change started as a small group of
            undergraduate students with a shared love for coding and volunteering
            for causes in their communities. Today, Commit the Change is a student
            organization at UC Irvine with a team of skilled designers and coders.
            We design websites for nonprofit organizations and build them from start to finish.
          </p>
        </div>
        <div className="panel-right">
          <img src={collaborationGraphic} alt="people collaborating" />
        </div>
      </div>
      <div className="links">
        <a href="#mission">Mission</a>
        <a href="#values">Values</a>
        <a href="#team">Team</a>
      </div>
      <div className="our-mission-panel" id="mission">
        <h1>Our Mission</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="our-values-panel" id="values">
        <h1>Our Values</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
        <div className="values">
          <div className="value">
            <span role="img" aria-label="emoji">🤝</span>
            <h2>Value 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <div className="value">
            <span role="img" aria-label="emoji">🛠️</span>
            <h2>Value 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
          <div className="value">
            <span role="img" aria-label="emoji">💗</span>
            <h2>Value 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className="our-team-panel" id="team">
        <h1>Our Team</h1>
        <div className="team-photos">
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
        </div>
        <div className="team-photos">
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
        </div>
        <div className="team-photos">
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
          <ProfileCard major="CS @ Stanford" bio="enjoys being a very good boy" name="Doggy Dog" imageURL="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png" instagramURL="https://www.instagram.com/eethannugget/" />
        </div>
      </div>

    </main>
  );
}

export default About;
