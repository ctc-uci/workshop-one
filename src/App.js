import React from "react";
import "./App.css";
import ReactGA from "react-ga4";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";

import Nav from "./app/components/Navbar/Nav";
import Redirect from "./app/components/Redirect/Redirect";
import Home from "./app/views/home/Home";
import About from "./app/views/about/About";
import Apply from "./app/views/apply/Apply";
import Projects from "./app/views/our-work/OurWork";
import Team from "./app/views/our-team/OurTeam";
import ContactUs from "./app/views/contact-us/ContactUs";

import "./styles/common.css";
import CCHAbout from "./app/views/our-work/CCH/CCHABout";
import CSEAbout from "./app/views/our-work/CSE/CSEAbout";
import LPAAbout from "./app/views/our-work/LPA/LPAAbout";

const App = () => {
  ReactGA.initialize("G-BHJD57HXT8");
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  // (done this way to make it easier to wrap with AnimatePresence
  //  only if the user does not prefer reduced motion)
  const PageRoutes = (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apply" element={<Apply />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/cse-about" element={<CSEAbout />} />
      <Route path="/projects/cch-about" element={<CCHAbout />} />
      <Route path="/projects/lpa-about" element={<LPAAbout />} />

      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route
        path="/discord"
        element={<Redirect url="https://discord.gg/bNTTT83Kgk" />}
      />
      <Route path="*" element={<Redirect url="/" />} />
    </Routes>
  );

  return (
    <div className="App">
      <MotionConfig reducedMotion="user">
        <Nav />
        {prefersReducedMotion ? (
          PageRoutes
        ) : (
          <AnimatePresence exitBeforeEnter>{PageRoutes}</AnimatePresence>
        )}
      </MotionConfig>
    </div>
  );
};

export default App;
