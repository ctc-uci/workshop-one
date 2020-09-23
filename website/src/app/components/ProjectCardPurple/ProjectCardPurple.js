import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCardPurple.css';

function ProjectCardPurple(props) {
  const {
    imageURL, projectName, description,
  } = props;
  return (
    <div className="project-card-purple">
      <img src={imageURL} alt="projectImage" className="project-card-image" />
      <h1 className="project-name-purple">{projectName}</h1>
      <p className="description-purple">{description}</p>
    </div>
  );
}

ProjectCardPurple.propTypes = {
  imageURL: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCardPurple;
