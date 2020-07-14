import React from 'react';
import './ProjectCard.css';


class ProjectCard extends React.Component{
    render(){
        return(
            <div className="project-card">
                <div className="top">
                    <img src= {this.props.logoURL}alt="logo" className="logo"/>
                    <h1 className="org-name">{this.props.name}</h1>
                </div>
                <div className="bottom">
                    <p className = "description">The mission of Crime Survivors is to provide hope and healing to victims
                        and survivors of crime through advocacy and the support of resources, information,
                        and empowerment from the critical time after a crime occurs through the challenges
                        and successes of surviving and thriving.
                    </p>
                    <a href="#" id="read-more">Read More</a>
                </div>
            </div>
        );
    }
}
export default ProjectCard;
