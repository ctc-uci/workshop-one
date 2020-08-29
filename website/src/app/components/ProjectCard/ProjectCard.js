import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import arrow from '../../../images/arrow.png';

function ProjectCard(props) {
  const {
    imageURL, projectName, description, projectURL,
  } = props;
  return (
    <div className="project-card">
      <img src={imageURL} alt="projectImage" style={{ width: '100%' }} />
      <h1 className="project-name">{projectName}</h1>
      <p className="description">{description}</p>
      <div className="card-bottom">
        <p className="view-project">View Project</p>
        <a className="view-project-button" href={projectURL} aria-label="view">
          <img alt="View More" src={arrow} />
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectURL: PropTypes.string.isRequired,
};

export default ProjectCard;
