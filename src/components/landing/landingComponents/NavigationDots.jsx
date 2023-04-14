import React from "react";
import "./landing.scss";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "events"].map((item) => (
        <a
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#a32a29" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
