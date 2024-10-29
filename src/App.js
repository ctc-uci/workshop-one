import React from "react";
import "./App.css";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";

import Nav from "./app/components/Navbar/Nav";
import Redirect from "./app/components/Redirect/Redirect";

import "./styles/common.css";
import GSPAbout from "./app/views/our-work/GSP/GSPAbout";
import CCHAbout from "./app/views/our-work/CCH/CCHABout";
import CSEAbout from "./app/views/our-work/CSE/CSEAbout";
import LPAAbout from "./app/views/our-work/LPA/LPAAbout";

const App = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const PageRoutes = (
    <Routes
      key={location.pathname}
      location={location}
    >
      <Route
        path="/projects/gsp-about"
        element={<GSPAbout />}
      />
      <Route
        path="/projects/cse-about"
        element={<CSEAbout />}
      />
      <Route
        path="/projects/cch-about"
        element={<CCHAbout />}
      />
      <Route
        path="/projects/lpa-about"
        element={<LPAAbout />}
      />
      <Route
        path="*"
        element={<Redirect url="/" />}
      />
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
