import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.css';

function ProfileCard(props) {
  const {
    imageURL, name, major, bio, facebookURL, twitterURL, linkedinURL, instagramURL,
  } = props;
  return (
    <div className="card">
      <img src={imageURL} alt="personImage" style={{ width: '100%' }} />
      <h1>{name}</h1>
      <p className="profile-title">{major}</p>
      <p>
        {bio}
      </p>
      <div className="logoborder">
        <a href={facebookURL} aria-label="Facebook URL"><i className="fa fa-facebook" /></a>
        <a href={twitterURL} aria-label="Twitter URL"><i className="fa fa-twitter" /></a>
        <a href={linkedinURL} aria-label="Linkedin URL"><i className="fa fa-linkedin" /></a>
        <a href={instagramURL} aria-label="Instagram URL"><i className="fa fa-instagram" /></a>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  facebookURL: PropTypes.string.isRequired,
  twitterURL: PropTypes.string.isRequired,
  linkedinURL: PropTypes.string.isRequired,
  instagramURL: PropTypes.string.isRequired,

};

export default ProfileCard;
