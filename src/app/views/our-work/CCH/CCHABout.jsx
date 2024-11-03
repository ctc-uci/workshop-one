import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./CCHAbout.css";
import Footer from "../../../components/Footer/Footer";
import CCHImage from "../../../../images/nonprofits/Colettes-Childrens-Home.jpg";
import ctcLogo from '../../../../images/logo/purple-ctc.svg'
import FamilyClipArt from "./FamilyClipArt.png"

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const CCHAbout = () => (
  <div className="cch-about-us-page-container">
    {/* your HTML starts here! */}

    <main className="cch-about-us-main">
      <div>
        <section id="section-header">
          {/* for your convenience, the npo logo */}
          <img src={CCHImage} alt="Colette's Children's Home Logo" id ="cch-logo"/>
          <div id = "buttons-and-title">
            <h1>Colette’s Children’s Home</h1>
            {/* for your convenience, some basic styles defined elsewhere */}
            <div id="btnbox">
            <a href = "https://github.com/ctc-uci">
                <button type="button" className="primary-button">
                  Github
                </button>
              </a>
              <a href = "https://www.coletteschildrenshome.com/">
                <button type="button" className="secondary-button">
                  Official Site
                </button>
              </a>
            </div>
            <h2>Fall 2024 - Spring 2025</h2>
          </div>
        </section>
        <div className="cch-about-us-content fade-in-image">
          <section>
            <h2 className="cch-about-us-title">Mission</h2>
            <hr />
            <p>Colette’s Children’s Home has many programs that provide emergency and transitional housing for homeless women/children and assist in maintaining employment. Their mission is to provide homeless single women and mothers with children a safe home and nurturing environment where they obtain compassionate support and services needed to achieve self-sufficiency.</p>
          </section>
          <section>
            <h2 className="cch-about-us-title">Problem</h2>
            <hr />
            <p>The current system for managing client and case data at Colette's Children's Home relies heavily on paper forms and spreadsheets, leading to inefficiencies in data entry, storage, and retrieval. This fragmented approach makes it difficult for case managers to track and analyze information such as the number of women served, volunteer hours, food donation weights, and program exit details. Additionally, critical client records like exit forms and success stories are not stored in a centralized, easily accessible format, complicating case management workflows and hindering data-driven decision-making.</p>
          </section>
          <section>
            <div className='cch-about-us-wrapped'>
              <img src={ctcLogo}/>
              <h2 className="cch-about-us-title">CTC&#39;s Solution</h2>
            </div>
            <hr />
            <p>To address these challenges, we are developing a digital case management tool that centralizes and streamlines data collection, storage, and retrieval. This tool will allow case managers to capture client information, including intake forms, exit surveys, and success stories, directly on iPads, enabling quick and accurate data entry. 
              <br/> <br/>All data will be stored in a centralized, easily accessible location, and will be queryable, allowing case managers to analyze metrics, such as the number of clients served within specific timeframes, directly from their desktops. Additionally, the tool will track key operational metrics, including volunteer hours, food donations, event statistics, and other program data, all in one integrated dashboard. This solution will replace the current paper and spreadsheet-based system, significantly improving efficiency, data accuracy, and the ability to make data-driven decisions.</p>
          </section>
        </div>
      </div>
    </main>
    {/* <img src={FamilyClipArt} alt="Family clip art"/> */}

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default CCHAbout;
