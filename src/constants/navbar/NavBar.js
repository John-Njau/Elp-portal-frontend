import { React } from "react";
// import { Outlet, Link } from "react-router-dom";
// import DesktopNav from "./DesktopNav";
// import MobileNav from "./MobileNav";
import { GrLanguage } from "react-icons/gr";
import { GoSearch } from "react-icons/go";
import { HiOutlineChatAlt } from "react-icons/hi";

import "./Navbar.scss";
import { MdDarkMode, MdNotificationsActive } from "react-icons/md";
import { RiFullscreenExitLine } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import images from "../images";

const NavBar = () => {
  return (

    <div className="navbar">
      <div className="wrapper">
        <div className="welcome">
          <h1>Hi cosmas</h1>
          <span>welcome back</span>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <GoSearch className="icon" />
        </div>
        <div className="items">
          <div className="item">
             <GrLanguage  className="icon"/> 
             English    
          </div>
          <div className="item">
             <MdDarkMode  className="icon"/>     
          </div>
          <div className="item">
             <RiFullscreenExitLine className="icon"/>     
          </div>
          <div className="item">
             <MdNotificationsActive  className="icon"/> 
             <div className="counter">5</div>    
          </div>
          <div className="item">
             <HiOutlineChatAlt  className="icon"/>     
          </div>
          <div className="item">
             <AiOutlineUnorderedList  className="icon"/>     
          </div>
          <div className="item">
            <img
              src={images.avatar}
              alt="avatar"
              className="avatar"
            />    
          </div>
          
        </div>
      </div>
    </div>
    
  );
};

export default NavBar;


// {/* <div>
//       <Fragment>
//         <div className="navigation">
//           <Link className="logo-container" to="/">
//             <img
//               src={require("../../assets/logo.png")}
//               alt="Equity Bank Logo"
//               className="logo"
//             />
//             {/* <EquityLogo className='logo'/> */}
    //       </Link>
    //       <DesktopNav />

    //       {/* <MobileNav /> */}
    //     </div>
        
    //   </Fragment>
      
    // </div> */}