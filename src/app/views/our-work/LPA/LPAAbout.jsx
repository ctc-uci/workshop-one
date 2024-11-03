import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./LPAAbout.css";
import Footer from "../../../components/Footer/Footer";
import LPAImage from '../../../../images/nonprofits/La-Pena.jpg';
import CTCImage from '../../../../images/logo/purple-ctc.svg';
import Triangle1 from '../../../../images/shapes/triangle1.png';
import Triangle2 from '../../../../images/shapes/triangle2.png';

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const LPAAbout = () => (
  <div className="about-us-page-container">
    {/* your HTML starts here! */}
    <main className="about-us-main">
      <div>
        <div className="header-container">
          <img src={LPAImage} alt="Stand Up to Trash Logo" style={{ width: '234px', height: '94px' }} />
          <h1>La Peña</h1>
          <button type="button" className="primary-button">GitHub</button>
          <button type="button" className="secondary-button">Official Site</button>
        </div>
        <div className="about-us-content">
          <p class="timeline-text">Fall 2024 - Spring 2025</p>
          <section>
            <h2>Mission</h2>
            <p>Since 1975, La Peña Cultural Center has been a central site for Latinx, Caribbean, and Indigenous diasporic communities of the Bay Area to preserve and celebrate cultural traditions, present new interdisciplinary creative works, and to nurture grassroots social justice movements with artists, activists, and allies.</p>
          </section>
          <section>
            <h2>Problem</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </section>
          <section>
            
            
            <div class="header-text">
              <img src={CTCImage} alt="CTC Logo" class="header-logo"></img>
              <h2>CTC&#39;s Solution</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
          </section>
        </div>
      </div>
    </main>
    
    <div class="graphics-container">
      <img src={Triangle1} alt="Triangle 1" class="triangle1"></img>
      <img src={Triangle2} alt="Triangle 2" class="triangle2"></img>
    </div>

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default LPAAbout;
