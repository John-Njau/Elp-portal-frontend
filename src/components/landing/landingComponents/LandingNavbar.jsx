import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./landingnavbar.scss";
import { images } from "../../../constants";
import { Button } from "@material-ui/core";

import { Outlet, Link } from "react-router-dom";

const LandingNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img class="logo" src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "events"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__login-buttons">
        <Link to="/signup">
          <Button color="primary">SIGN UP</Button>
        </Link>
        <Link to="/signin">
          <Button variant="contained" color="blue" className="sign__in-button">
            SIGN IN
          </Button>
        </Link>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "events"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}

              <li>
                <Link to="/signup">
                  <Button color="primary">SIGN UP</Button>
                </Link>
              </li>
              <li>
                <Link to="/signin">
                  <Button
                    variant="contained"
                    color="blue"
                    className="sign__in-button"
                  >
                    SIGN IN
                  </Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
      <Outlet></Outlet>
    </nav>
  );
};

export default LandingNavbar;
