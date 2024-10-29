// import ctc from '../images/nonprofits/CTC-Placeholder.png';
// import placeholder from '../images/nonprofits/project-placeholder.png';
import crs from '../images/nonprofits/Crime-Survivors.png';
import ccl from '../images/nonprofits/Child-Creativity-Lab.png';
import jff from '../images/nonprofits/Justice-For-Families.png';
import wm from '../images/nonprofits/Waymakers.png';
import och from '../images/nonprofits/OC-Habitats.png';
import tlp from '../images/nonprofits/The-Literacy-Project.png';
import afc from '../images/nonprofits/Abound-Food-Care.png';
import fya from '../images/nonprofits/Find-Your-Anchor.png';
import gsp from '../images/nonprofits/Get-Inspired.png';
import cds from '../images/nonprofits/Cell-Dogs.png';
import pnp from '../images/nonprofits/Patriots-and-Paws.png';
import s2t from '../images/nonprofits/Stand-Up-To-Trash.png';
import ais from '../images/nonprofits/Achievement-Institute-Of-STEM-Scholars.png';
import fph from '../images/nonprofits/Feeding-Pets-Of-The-Homeless.png';

const projects = {
  active: [
    {
      start: 'Fall 2023',
      end: 'Spring 2024',
      src: ais,
      projectName: 'Achievement Institute for STEM Scholars',
      description:
        'A college readiness program catered towards high-achieving, economically disadvantaged high school students interested in pursuing a STEM career.',
      projectURL: 'https://github.com/ctc-uci/',
      npoURL: 'https://www.aissfoundation.org/',
      aboutURL: '/projects/aiss-about',
      backgroundColor: '#FFDDC9',
    },
    {
      start: 'Fall 2023',
      end: 'Spring 2024',
      src: s2t,
      projectName: 'Stand Up To Trash',
      description:
        'This NPO\'s mission is to protect ocean ecosystems by raising awareness of the negative effects caused by plastic pollution through environmental education for future generations. ',
      projectURL: 'https://github.com/ctc-uci/',
      npoURL: 'https://www.standuptotrash.com',
      aboutURL: '/projects/s2t-about',
      backgroundColor: '#C7E0FF',
    },
    {
      start: 'Fall 2023',
      end: 'Spring 2024',
      src: fph,
      projectName: 'Feeding Pets of the Homeless',
      description:
        'This NPO\'s mission is to feed and provide basic emergency veterinary care to the pets of the homeless. ',
      projectURL: 'https://github.com/ctc-uci/',
      npoURL: 'https://petsofthehomeless.org/',
      aboutURL: '/projects/fph-about',
      backgroundColor: '#CDFBF8',
    },
  ],
  inactive: [
    {
      start: 'Fall 2022',
      end: 'Spring 2023',
      src: gsp,
      projectName: 'Get Inspired',
      description:
        'We built a new database system for them to better organize and report their Pismo Clam restoration data!',
      projectURL: 'https://github.com/ctc-uci/get-inspired/',
      npoURL: 'https://getinspiredinc.org/',
      aboutURL: '/projects/gsp-about',
    },
    {
      start: 'Fall 2022',
      end: 'Spring 2023',
      src: cds,
      projectName: 'Cell Dogs',
      description:
        'We created a canine tracker for them to manage their trainee dogs in correctional programs and adoption!',
      projectURL: 'https://github.com/ctc-uci/cell-dogs/',
      npoURL: 'https://celldogs.org/',
    },
    {
      start: 'Fall 2022',
      end: 'Spring 2023',
      src: pnp,
      projectName: 'Patriots and Paws',
      description:
        'We designed a system for them to manage and schedule pickups for their furniture donations for veterans!',
      projectURL: 'https://github.com/ctc-uci/patriots-and-paws/',
      npoURL: 'https://patriotsandpaws.org/',
    },
    {
      start: 'Fall 2021',
      end: 'Spring 2022',
      src: och,
      projectName: 'OC Habitats',
      description:
        'We constructed digital forms for their habitat overseers to provide them with better data on their conservation efforts!',
      projectURL:
        'https://github.com/ctc-uci/oc-habitats-frontend',
      npoURL: 'https://www.ochabitats.org/',
    },
    {
      start: 'Fall 2021',
      end: 'Spring 2022',
      src: tlp,
      projectName: 'The Literacy Project',
      description:
        'We created a platform to manage literacy scorecards for children enrolled in their award-winning reading program!',
      projectURL:
        'https://github.com/ctc-uci/the-literacy-project-frontend',
      npoURL: 'https://www.literacyproj.org/',
    },
    {
      start: 'Fall 2021',
      end: 'Spring 2022',
      src: fya,
      projectName: 'Find Your Anchor',
      description:
        'We made a map for them to track where their mental health anchor boxes are traveling throughout the world!',
      projectURL:
        'https://github.com/ctc-uci/find-your-anchor-frontend',
      npoURL: 'https://findyouranchor.us/',
    },
    {
      start: 'Fall 2021',
      end: 'Fall 2022',
      src: afc,
      projectName: 'Abound Food Care',
      description:
        'We created a digital system for them to better connect with their volunteers and engage them in events!',
      projectURL:
        'https://github.com/ctc-uci/abound-food-care-frontend',
      npoURL: 'https://www.aboundfoodcare.org/',
    },
    {
      start: 'Fall 2020',
      end: 'Spring 2021',
      src: jff,
      projectName: 'Justice for Families',
      description:
        'We created a mobile application for the families of incarcerated loved ones to find community and support!',
      mediumURL:
        'https://medium.com/@committhechange.uci/upcoming-project-2-reveal-with-justice-for-families-57f91752635d',
      npoURL: 'https://www.justice4families.org/',
      projectURL: 'https://github.com/ctc-uci/justice-for-families',
    },
    {
      start: 'Fall 2020',
      end: 'Spring 2021',
      src: wm,
      projectName: 'Waymakers',
      description:
        'We created a platform to electronically capture volunteer and inventory data about their different programs!',
      mediumURL:
        'https://medium.com/@committhechange.uci/upcoming-project-3-reveal-with-waymakers-4be6f2915c83',
      npoURL: 'https://waymakersoc.org/',
      projectURL: 'https://github.com/ctc-uci/waymakers',
    },
    {
      start: 'Fall 2020',
      end: 'Spring 2021',
      src: ccl,
      projectName: 'Child Creativity Lab',
      description:
        'We created an online waiver system and a platform to sell educational kits with instructional videos for children!',
      mediumURL:
        'https://medium.com/@committhechange.uci/upcoming-project-1-reveal-with-child-creativity-lab-e9fb41fe7835',
      npoURL: 'https://www.childcreativitylab.org/',
      projectURL: 'https://github.com/ctc-uci/ccl-videos',
    },
    {
      start: 'Spring 2020',
      end: 'Summer 2020',
      src: crs,
      projectName: 'Crime Survivors',
      description:
        'We created a website to replace their paper pamphlets with resources and information for crime victims!',
      mediumURL:
        'https://medium.com/@committhechange.uci/past-project-reveal-with-crime-survivors-ba557206ee10',
      npoURL: 'https://crimesurvivors.org/',
      projectURL: 'https://github.com/ctc-uci/crime-survivors',
    },
  ],
};
export default projects;
