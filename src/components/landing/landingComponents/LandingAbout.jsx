import React from "react";
import MainLayoutLandingPage from "../../../layouts/MainLayoutLandingPage";

const LandingAbout = () => {
  return (
    <main>
      <div className="landing__layout">LandingAbout</div>
    </main>
  );
};

// export default MainLayoutLandingPage(LandingAbout,'about')
export default (LandingAbout, "about");
