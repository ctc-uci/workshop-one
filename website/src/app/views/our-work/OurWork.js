import React from 'react';
import './OurWork.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import * as projectData from './ProjectCard.json';

function OurWork() {
  return (
    <main>
      <div className="top-our-work">
        <div className="title-div">
          <h1 className="title-header">Our Work</h1>
          <p className="title-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#bottom-our-work" className="read-more-button">Read More</a>
        </div>
        <img src="https://seedworld.com/site/wp-content/uploads/2018/12/blueprint-4056027_640.jpg" alt="our-work" className="our-work-img" />
      </div>
      <div id="bottom-our-work">
        <div className="bottom">
          <h1 className="past-projects">Past Projects</h1>
          <div className="projects">
            <ProjectCard className="projectcard" imageURL={projectData.project1.imageURL} projectName={projectData.project1.projectName} description={projectData.project1.description} projectURL={projectData.project1.projectURL} />
            <ProjectCard className="projectcard" imageURL={projectData.project2.imageURL} projectName={projectData.project2.projectName} description={projectData.project2.description} projectURL={projectData.project2.projectURL} />
            <ProjectCard className="projectcard" imageURL={projectData.project3.imageURL} projectName={projectData.project3.projectName} description={projectData.project3.description} projectURL={projectData.project3.projectURL} />
          </div>
        </div>
      </div>
    </main>
  );
}
export default OurWork;
