import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCard(props) {
  const {
    imageURL, projectName, description,
  } = props;
  return (
    <div className="project-card">
      <img src={imageURL} alt="projectImage" className="project-card-image" />
      <h1 className="project-name">{projectName}</h1>
      <p className="description">{description}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
