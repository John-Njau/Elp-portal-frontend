import React from "react";
import Sidebar from "./common/sidebar/Sidebar";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer.js";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import "./MainLayoutAuth.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.svg";

const MainLayoutAuth = (Component) =>
  function HOC() {
    const { auth } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleMobile = () => {
      setSidebarOpen(!sidebarOpen);
    };

    return (
      <div class="container-fluid " style={{ backgroundColor: "#f5f6f8" , height: "100vh"}} >
        <div class="row ">
          <Sidebar />
          <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            {sidebarOpen && (
              <div className="mobile">
                <ul class="nav">
                  <div className="toggle-mobile-x" onClick={toggleMobile}>
                    {sidebarOpen ? (
                      <span class="material-icons">&#x2715;</span>
                    ) : (
                      <span class="material-icons">&#xE5D2;</span>
                    )}
                  </div>

                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      onClick={toggleMobile}
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" onClick={toggleMobile} to="/events">
                      Events
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      onClick={toggleMobile}
                      to="/chapters"
                    >
                      Chapters
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" onClick={toggleMobile} to="/hubs">
                      Hubs
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      onClick={toggleMobile}
                      to="/opportunities"
                    >
                      Opportunities
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      onClick={toggleMobile}
                      to="/admin-dashboard"
                    >
                      Admin Dashboard
                    </Link>
                  </li>
                </ul>
                <span class="copyright ">
                  Copyright © 2023
                  <Link to="/dashboard" className="logo">
                    <img src={logo} alt="equity logo" />
                  </Link>
                  <a href="/" rel="nofollow">
                    {" "}
                    ELP Tech hub
                  </a>
                </span>
              </div>
            )}
            <div class="main-navbar sticky-top bg-white">
              <Navbar />
              <div className="toggle-mobile" onClick={toggleMobile}>
                {sidebarOpen ? (
                  <span class="material-icons">&#x2715;</span>
                ) : (
                  <span class="material-icons">&#xE5D2;</span>
                )}
              </div>

              <div class="main-content-container container-fluid px-4">
                <Component />
              </div>
              <Footer />
            </div>
          </main>
        </div>
      </div>
    );
  };

export default MainLayoutAuth;
