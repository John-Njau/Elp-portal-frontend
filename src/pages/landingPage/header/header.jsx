import React from 'react';
import "./header.scss"
import logo from "../../../assets/images/Logo.svg"
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Header = () => {
    const [ismobileMenu, setisMobileMenu] = useState(false);
    
    return(
  <header className="header">
    <div className="header-container">
      <a href="#hero" className="logo"><img src={logo} alt='equity logo'/></a>
      
      {ismobileMenu ? <button onClick={() => setisMobileMenu(!ismobileMenu)}
                
                id="hamburger-close"
                className="hamburger"
              >&times;</button>
            : <button onClick={() => setisMobileMenu(!ismobileMenu)}
            id="hamburger-button"
            className="hamburger"
          >&#9776;</button>}
      <nav className={`nav ${ismobileMenu ?'nav--mobile' : ""}`}>
        <div className="navlistcontainer">
          <ul className="navlist">
            <li className="navitem "><a href="#hero" onClick={() => setisMobileMenu(false)}>Home</a></li>
            <li className="navitem "><a href="#features" onClick={() => setisMobileMenu(false)}>Features</a></li>
            <li className=" navitem"><a href="#about" onClick={() => setisMobileMenu(false)}>About Us</a></li>
            {/* <li className="navitem "><a href="#contact" onClick={() => setisMobileMenu(false)}>Contact Us</a></li> */}
          </ul>
        </div>
        <div className=' auth-buttons'>
       <Link to='/signin'>  <button className="sign-in">Sign In</button></Link>
        {/* <p className=' mx-2 text-black hover:text-[#8B181A]'>Sign In</p> */}
        <Link to='/signup'><button className="sign-up">Sign Up</button></Link>
      </div>
      </nav>
      <Outlet></Outlet>
    </div>
  </header>
);}

export default Header;

