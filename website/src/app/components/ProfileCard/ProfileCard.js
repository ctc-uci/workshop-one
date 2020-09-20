import React from 'react';
import PropTypes from 'prop-types';
import linkedinLogo from '../../../images/about/linkedin.svg';
import './ProfileCard.css';

function ProfileCard(props) {
  const {
    imageURL, name, position, linkedinURL,
  } = props;
  return (
    <div className="card">
      <img className="profile-img" src={imageURL} alt="personImage" />
      <div className="info">
        <div className="info-text">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
      <div className="logoborder">
        <a href={linkedinURL}><img src={linkedinLogo} alt="linkedin logo" /></a>
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
