import "./Navbar.scss";
import NavLinksContainer from "./navLinks";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
   
  const [open, setOpen] = useState(false);
  const closeMobileNav = ()  => {
    setOpen(false)
    
  };
  return (
    <>
      <Link to='#' onClick={() => setOpen(!open)} className={`toggle-btn ${open ? 'close' : ''}`}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      {open && <NavLinksContainer isMobile={true} closeMobileNav = {closeMobileNav} className={"nav-links-container-mobile active"}  />}
    </>
  );
};

export default MobileNav;
