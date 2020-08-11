import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <ProjectCard
        logoURL="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/28168041_1972360476125648_1736462436458228316_n.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=uXtuY39bH94AX_Fok4R&_nc_ht=scontent-sjc3-1.xx&oh=f89aa3ce220f4a942a02489cb04ff740&oe=5F31AC17"
        name="Crime Survivors"
        description="The mission of Crime Survivors is to provide hope and healing to victims and survivors of crime through advocacy and the support of resources, information,
          and empowerment from the critical time after a crime occurs through the challenges
          and successes of surviving and thriving."
      />
    </div>
  );
}

export default Projects;
