import React from "react";
// import styled from "styled-components";
import './mainLayouts.scss';


const MainLayoutwithoutAuth = (Component) => function HOC() {
  
  

  return (
    <>
    
    <div className="landing__layout">
        <div className="main__layout-main-content">
            <div className="main__layout-NavBar">
                
            </div>
            <div className="main__layout-component">
                <Component/>
            </div>
            <div className="landing__layout-footer">
                
            </div>
        </div>
    
    </div>
    </>
  )
}

export default MainLayoutwithoutAuth;