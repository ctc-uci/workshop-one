import React from "react";

// note: this is normally bad practice, but we haven't covered module files yet,
//  will be changed when we
import "./CSEAbout.css";
import Footer from "../../../components/Footer/Footer";
import CSEImage from "../../../../images/nonprofits/Center-Stage.png";
import CTCLogo from "../../../../images/logo/purple-ctc.svg";
import Accent1 from "../../../../images/logo/accent1.png";
import Accent2 from "../../../../images/logo/accent2.png";

// you can safely ignore most of the things above the opening div tag for now,
// we'll cover them in more detail in our Frontend/React unit
const CSEAbout = () => (
  <div className="about-us-page-container">
    {/* your HTML starts here! */}

    <img
      src={Accent1}
      className="triangle"
    />
    <main className="about-us-main">
      <div>
        <section className="header-banner">
          {/* for your convenience, the npo logo */}
          <img
            src={CSEImage}
            alt="Center Stage Logo"
            style={{ width: "100px", height: "auto" }}
          />
          <div className="content">
            {/* for your convenience, some basic styles defined elsewhere */}
            <div className="heading-group">
              <h1
                class="title"
                className="heading"
              >
                Center Stage
              </h1>
              <a href="https://github.com/ctc-uci/workshop-one">
                <button
                  type="button"
                  className="primary-button"
                >
                  Github
                </button>
              </a>

              <a href="https://www.cstagela.com/">
                <button
                  type="button"
                  className="secondary-button"
                >
                  Offical Site
                </button>
              </a>
            </div>
            <span className="timeline">Fall 2023 - Spring 2024</span>
          </div>
        </section>
        <div className="about-us-content">
          <section width="10px">
            <h2 className="header">Mission</h2>
            <p className="body">
              Center Stage is a non-profit organization whose mission is to
              increase visibility of Chinese performing arts. They offer a
              variety of dance classes revolving around Chinese cultural dance.
            </p>
          </section>
          <section>
            <h2 className="header">Problem</h2>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </section>

          <section>
            <div className="icon-header">
              <img
                src={CTCLogo}
                alt="purple ctc logo"
                width="33px"
                height="20.16px"
                gap="0px"
                opacity="0px"
              />
              <h2 className="header">CTC&#39;s Solution</h2>
            </div>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        </div>
      </div>
    </main>

    {/* your HTML ends here! */}

    <Footer />
  </div>
);

export default CSEAbout;
