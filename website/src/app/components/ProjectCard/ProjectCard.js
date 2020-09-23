import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import { animated } from 'react-spring';

function ProjectCard(props) {
  const {
    imageURL, projectName, description, projectURL, isAnimated, animationProps = {},
  } = props;
  return (
    <animated.div style={isAnimated ? animationProps : null} className="project-card">
      <div className="project-card-image-div">
        <img
          src={imageURL}
          alt="projectImage"
          className="upcoming-project-card-image"
        />
      </div>
      <div className="project-card-text">
        <h1 className="project-name">{projectName}</h1>
        <p className="description">{description}</p>
      </div>
      <a
        href={projectURL}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-more"
      >
        Read More
      </a>
    </animated.div>
  );
}

ProjectCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectURL: PropTypes.string.isRequired,
  isAnimated: PropTypes.bool.isRequired,
  animationProps: PropTypes.shape,
};

ProjectCard.defaultProps = {
  animationProps: {},
};

export default ProjectCard;
