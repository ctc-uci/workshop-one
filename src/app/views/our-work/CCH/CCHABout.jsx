import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./CCHAbout.css";
import Footer from "../../../components/Footer/Footer";
import CCHImage from "../../../../images/nonprofits/Colettes-Childrens-Home.jpg";
import CTCLogo from "../../../../images/nonprofits/ctc-logo.png";
import TRIANGLES from "../../../../images/nonprofits/triangles.png";

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const CCHAbout = () => (
  <div className="about-us-page-container">
    {/* your HTML starts here! */}

    <main className="about-us-main">
      <div className="about-body">
        <div className="header">
            <img src={CCHImage} width={103} height={103} alt="Colette's Children's Home Logo" />
            {/* for your convenience, the npo logo */}
            <div className="text-info">
              <h2 style={{fontSize: 32, fontWeight: 400, font: "Inter", height: 20}}>Colette’s Children’s Home</h2>
              {/* for your convenience, some basic styles defined elsewhere */}
              <div className="buttons">
                <button type="button" onClick={() => window.open("https://github.com")} className="primary-button">
                  Github
                </button>
                <button type="button" onClick={() => window.open("https://www.coletteschildrenshome.com/")} className="secondary-button">
                  Official Site
                </button>
              </div>
              <p style={{color: "#6F6F6F", font: "Source Code Pro"}}>Fall 2023 - Spring 2024</p>
            </div>
        </div>
        <div className="about-us-content">
          <section>
            <h4 class="subheadings">Mission</h4>
            <p>Colette’s Children’s Home has many programs that provide emergency and transitional housing for homeless women/children and assist in maintaining employment. Their mission is to provide homeless single women and mothers with children a safe home and nurturing environment where they obtain compassionate support and services needed to achieve self-sufficiency.</p>
          </section>
          <section>
            <h4 class="subheadings">Problem</h4>
            <p>The current system for managing client and case data at Colette's Children's Home relies heavily on paper forms and spreadsheets, leading to inefficiencies in data entry, storage, and retrieval. This fragmented approach makes it difficult for case managers to track and analyze information such as the number of women served, volunteer hours, food donation weights, and program exit details. Additionally, critical client records like exit forms and success stories are not stored in a centralized, easily accessible format, complicating case management workflows and hindering data-driven decision-making.</p>
          </section>
          <section>
            <div className="solutionLine">
              <img src={CTCLogo} style={{height: "20.16px", width: "36.96px"}} alt="CTC Logo"/>
              <h4 class="subheadings">CTC&#39;s Solution</h4>
            </div>
            <p>To address these challenges, we are developing a digital case management tool that centralizes and streamlines data collection, storage, and retrieval. This tool will allow case managers to capture client information, including intake forms, exit surveys, and success stories, directly on iPads, enabling quick and accurate data entry. All data will be stored in a centralized, easily accessible location, and will be queryable, allowing case managers to analyze metrics, such as the number of clients served within specific timeframes, directly from their desktops. Additionally, the tool will track key operational metrics, including volunteer hours, food donations, event statistics, and other program data, all in one integrated dashboard. This solution will replace the current paper and spreadsheet-based system, significantly improving efficiency, data accuracy, and the ability to make data-driven decisions.</p>
          </section>
        </div>
      </div>
    </main>

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default CCHAbout;
