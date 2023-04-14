import React from "react";
// import styled from "styled-components";
import NavBar from "../constants/navbar/NavBar";
// import RightSidebar from "../constants/rightSidebar/RightSidebar";
import Sidebar from "../constants/sidebar/Sidebar";
import "./mainLayouts.scss";
import useAuth from "../hooks/useAuth";

const MainLayoutwithAuth = (Component) =>
  function HOC() {
  const {auth} = useAuth()
  console.log("auth",auth)

    return (
      <div className="main__layout">
        <Sidebar />
        <div className="main__layout-main-component">
          <NavBar />
          <Component />
        </div>
      </div>
    );
  };

export default MainLayoutwithAuth;

// {
//   /* <>
    
// <div className="main__layout"> 

//   <Sidebar />
 
//   <div className="main__layout-main-content">
//   <div className="main__layout-NavBar">
//   {/* <NavBar /> */
// }
// naavbar
// </div>

//  <div className="main__layout-component">
//   <Component/>
// </div>
// </div>

// {
//   /* <div className="main__layout-rightSidebar">
//   <RightSidebar/>
//   </div> */
// }

// {
//   /* <Consume/> */
// }

// </div>
// </> */}
