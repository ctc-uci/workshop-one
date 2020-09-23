import React from 'react';
import PropTypes from 'prop-types';
import linkedinLogo from '../../../images/about/linkedin.svg';
import './ProfileCard.css';

function ProfileCard(props) {
  const {
    imageURL, name, position, linkedinURL,
  } = props;
  return (
    <div className="card-container">
      <img className="profile-img" src={imageURL} alt="personImage" />
      <div className="card-bottom">
        <div className="info">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
        <div className="logoborder">
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="linkedin logo" /></a>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkedinURL: PropTypes.string.isRequired,
};

export default ProfileCard;
