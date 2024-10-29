import React from "react";
import "./App.css";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence, MotionConfig, useReducedMotion } from "framer-motion";

import Nav from "./app/components/Navbar/Nav";
import Redirect from "./app/components/Redirect/Redirect";

import "./styles/common.css";
import GSPAbout from "./app/views/our-work/GSP/GSPAbout";
import FPHAbout from "./app/views/our-work/FPH/FPHAbout";
import AISSAbout from "./app/views/our-work/AISS/AISSAbout";
import S2TAbout from "./app/views/our-work/S2T/S2TAbout";

const App = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const PageRoutes = (
    <Routes
      key={location.pathname}
      location={location}
    >
      <Route
        path="/projects/aiss-about"
        element={<AISSAbout />}
      />
      <Route
        path="/projects/fph-about"
        element={<FPHAbout />}
      />
      <Route
        path="/projects/gsp-about"
        element={<GSPAbout />}
      />
      <Route
        path="/projects/s2t-about"
        element={<S2TAbout />}
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
