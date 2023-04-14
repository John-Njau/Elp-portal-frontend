import React from "react";
import { MdDashboard } from "react-icons/md";
import { ImHome3 } from "react-icons/im";
import { GiPartyPopper } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
// import { GrUserWorker ,GrArticle } from 'react-icons/gr';

import "./Sidebar.scss";
// import { SidebarDataUser } from './sidebarDataLinks';
// import SubMenu from './subMenu';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ELP PORTAL</span>
      </div>
      <hr />
      <div className="center">
        <div className="sidebar-message">
          <p>
            Revenge Isn't A Passion It's A Disease That Eats At Your Mind And
            Poisons Your Soul
          </p>{" "}
          <hr /> <p>R.R</p>
        </div>
        <ul>
          <li>
            <MdDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <ImHome3 className="icon" />
            <span>Home</span>
          </li>
          {/* <p className="title">services</p> */}
          <li>
            <GiPartyPopper className="icon" />
            <span>Events</span>
          </li>
          <li>
            <BsBriefcaseFill className="icon" />
            <span>Opportunities</span>
          </li>
          <li>
            <MdArticle className="icon" />
            <span>Our Stories</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
    <p className="title">services</p>
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      <div className="colorOption"></div>
    </div> */}
    </div>
  );
};

export default Sidebar;

// {/* <div className='sidebar'>
// <div className="logo-details">
// <i className='bx bxl-c-plus-plus icon'></i>
//   <div className="logo_name">ELP PORTAL</div>
//   <i className='bx bx-menu' id="btn" ></i>
// </div>

//    <div style={{ marginTop: "2rem" }}>
//       {SidebarDataUser.map((item, index) => {
//         return <SubMenu item={item} key={index} />;
//       })}
//     </div>

// </div> */}
