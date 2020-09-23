import crimesurvivors from '../../../images/nonprofits/our-work-crime-survivors.svg';
import ccl from '../../../images/nonprofits/Child-Creativity-Lab.png';
import jff from '../../../images/nonprofits/Justice-For-Families.png';
import wm from '../../../images/nonprofits/Waymakers.png';

const projects = {
  active: [
    {
      imageURL: ccl,
      projectName: 'Child Creativity Lab',
      description:
        'We will create an online waiver system and a platform to sell educational kits for children.',
      projectURL: 'https://google.com',
    },
    {
      imageURL: jff,
      projectName: 'Justice for Families',
      description:
        'We will create a mobile application for the families of incarcerated loved ones to connect.',
      projectURL: 'https://google.com',
    },
    {
      imageURL: wm,
      projectName: 'Waymakers',
      description:
        'We will create a platform to electronically capture volunteer and inventory data about their programs.',
      projectURL: 'https://google.com',
    },
  ],
  inactive: [
    {
      imageURL: crimesurvivors,
      projectName: 'Crime Survivors',
      description:
        'We created a website to replace their paper pamphlets that detail important resources and information for crime victims in different counties throughout Southern California. This project will save the organization thousands of dollars every year in printing and distribution costs, which will go directly back into helping survivors get necessity items.',
      projectURL: 'https://google.com',
    },
  ],
};
export default projects;
