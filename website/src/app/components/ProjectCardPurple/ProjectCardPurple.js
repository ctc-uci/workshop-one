import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCardPurple.css';

function ProjectCardPurple(props) {
  const {
    src, alt, projectName, description,
  } = props;
  return (
    <div className="project-card-purple">
      <img src={src} alt={alt} className="project-card-image" />
      <h1 className="project-name-purple">{projectName}</h1>
      <p className="description-purple">{description}</p>
    </div>
  );
}

ProjectCardPurple.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCardPurple;
