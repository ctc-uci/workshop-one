import React from 'react';
import './OurWork.css';
import { animated, useSpring } from 'react-spring';
import animationConfig from '../animationConstants';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectCardPurple from '../../components/ProjectCardPurple/ProjectCardPurple';
import ourWorkPic from '../../../images/ourWork/our-work.svg';
import * as projectData from './ProjectCard.json';

// NPO Logos
import childCreativityLab from '../../../images/nonprofits/Child-Creativity-Lab.png';
import justiceForFamilies from '../../../images/nonprofits/Justice-For-Families.png';
import waymakers from '../../../images/nonprofits/Waymakers.png';
import crimeSurvivors from '../../../images/nonprofits/our-work-crime-survivors.svg';

function OurWork() {
  const slideUp = useSpring(animationConfig.slideUp(true));

  return (
    <main>
      <animated.div style={slideUp} className="top-panel">
        <div className="top-panel-text">
          <div className="inside-top-panel-text">
            <h1 className="top-panel-title">Our Work</h1>
            <p className="top-panel-description">
              Each academic school year, Commit the Change partners with new
              non-profit organizations to work on an impactful project free of
              charge. With the non-profit, we assess problems, ideate solutions,
              and create software to address an operational bottleneck.
            </p>
            <a href="#middle-our-work" className="common-pink-button">
              Learn More
            </a>
          </div>
        </div>
        <div className="top-panel-pic">
          <img src={ourWorkPic} alt="our-work" className="our-work-panel-img" />
        </div>
      </animated.div>
      <div id="middle-our-work">
        <div className="project-text">
          <h1 className="upcoming-projects">Our Upcoming Projects</h1>
          <p className="upcoming-projects-description">
            We are proud to present the below projects for the 2020-2021
            academic year!
          </p>
        </div>
        <div className="projects">
          <ProjectCard
            className="projectcard"
            id="ccl"
            imageURL={childCreativityLab}
            projectName={projectData.project1.projectName}
            description={projectData.project1.description}
            projectURL={projectData.project1.projectURL}
          />
          <ProjectCard
            className="projectcard"
            imageURL={justiceForFamilies}
            projectName={projectData.project2.projectName}
            description={projectData.project2.description}
            projectURL={projectData.project2.projectURL}
          />
          <ProjectCard
            className="projectcard"
            imageURL={waymakers}
            projectName={projectData.project3.projectName}
            description={projectData.project3.description}
            projectURL={projectData.project3.projectURL}
          />
        </div>
      </div>
      <div className="past-project-section">
        <div className="past-project-div">
          <div className="past-project-content">
            <h1 className="past-project-title">Our Past Project</h1>
            <p className="past-project-description">
              Commit the Change started its first project in April 2020 with the
              nonprofit Crime Survivors. This organization wanted a way to put their paper pamplets online, so that the
              information can be more accessible and to decrease the printing cost of the pamplets.
            </p>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="common-pink-button"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="bottom-card-div">
          <div className="bottom-card">
            <ProjectCardPurple
              projectName={projectData.project4.projectName}
              imageURL={crimeSurvivors}
              description={projectData.project4.description}
              projectURL={projectData.project4.projectURL}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
export default OurWork;
