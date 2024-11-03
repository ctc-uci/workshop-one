import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./CSEAbout.css";
import Footer from "../../../components/Footer/Footer";
import CSEImage from "../../../../images/nonprofits/Center-Stage.png";
import CTCLogo from "../../../../images/logo/purple-ctc.svg";
import Triangle from "../../../../images/logo/triangle.svg";

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const CSEAbout = () => (
  <div className="about-us-page-container">
    <img class="top-right-triangle" src={Triangle}/>
    <img class="bottom-right-triangle" src={Triangle}/>

    {
    /* your HTML starts here! */
    }
    <main className="about-us-main">
      <div>
        <section class="header">
          {/* for your convenience, the npo logo */}
          <img
            class="logo"
            src={CSEImage}
            alt="Center Stage Logo"
            // style={{ width: '300px', height: 'auto' }}
          />
          <div>
            <div class="header-flex-container">
              <div class="titlewithbuttons">
                {/* <div class="excluding-text"> */}
                  <h1 class="title">Center Stage</h1>

                  {/* for your convenience, some basic styles defined elsewhere */}
                  <button type="button" className="primary-button">
                    GitHub
                  </button>
                  <button type="button" className="secondary-button">
                    Official Site
                  </button>
                {/* </div> */}
              </div>
              <h2>Fall 2023 - Spring 2024</h2>
            </div>
          </div>
        </section>
        

        <div className="about-us-content">
          <section>
            <h2>Mission</h2>
            <p>Center Stage is a non-profit organization whose mission is to increase visibility
              of Chinese performing arts. They offer a variety of dance classes revolving
              around Chinese cultural dance.</p>
          </section>
          <section>
            <h2>Problem</h2>
            <p>Center Stage's current method of tracking student registration and 
              attendance for dance classes relies on manual processes and lacks a 
              centralized system for managing student information, class enrollment, 
              and progress, leading to inefficiencies.</p>
          </section>
          <section>
              <h2><img class="ctc-logo" src={CTCLogo} alt="ctc logo"/> CTC&#39;s Solution</h2>
            <p>Commit the Change will develop a dance class and video lesson platform 
              that streamlines student registration, class management, and progress 
              tracking, providing a centralized and efficient system for both students 
              and instructors.</p>
          </section>
        </div>
      </div>

      <div class="spacer"></div>
    </main>

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default CSEAbout;
