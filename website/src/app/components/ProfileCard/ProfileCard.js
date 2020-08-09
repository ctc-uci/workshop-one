import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="card">
      <img src={this.props.imageURL} alt="personImage" style={{ width: '100%' }} />
      <h1>{this.props.name}</h1>
      <p className= "title">{this.props.major}</p>
      <p> {this.props.bio}</p>
      <div className="logoborder">
        <a href={this.props.facebookURL}><i className="fa fa-facebook"></i></a>
        <a href={this.props.twitterURL}><i className="fa fa-twitter"></i></a>
        <a href={this.props.linkedinURL}><i className="fa fa-linkedin"></i></a>
        <a href={this.props.instagramURL}><i className="fa fa-instagram"></i></a>
      </div>
    </div>
  );
}
export default ProfileCard;
