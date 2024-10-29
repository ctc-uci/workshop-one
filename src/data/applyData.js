import React from 'react';
import socialInfo from './socialsData';

const APPS_OPEN = false;

const applyData = {
  applicationsOpen: APPS_OPEN,
  designAppLink: APPS_OPEN ? 'https://bit.ly/ctc-designer-app' : null,
  devAppLink: APPS_OPEN ? 'https://bit.ly/ctc-developer-app' : null,
  contactEmail: socialInfo.email,
  inlineEmail: (
    <a href={`mailto:${socialInfo.email}`} className="ctc-apply-email-link">
      {socialInfo.email}
    </a>
  ),
};

export default applyData;
