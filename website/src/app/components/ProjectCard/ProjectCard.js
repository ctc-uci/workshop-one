import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCard(props) {
  const {
    logoURL, name, description,
  } = props;
  return (
    <div className="project-card">
      <div className="top">
        <img src={logoURL} alt="logo" className="logo" />
        <h1 className="org-name">{name}</h1>
      </div>
      <div className="bottom">
        <p className="description">
          {description}
        </p>
        <a href="insert_link_here" id="read-more">Read More</a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  logoURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default ProjectCard;
