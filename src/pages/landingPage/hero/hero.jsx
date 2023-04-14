import React from 'react';
import "./hero.scss"
import hero from '../../../assets/images/hero.svg'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="hero-section" id='hero'>
      <div className="hero-outer-container  ">
        <div className=" hero-inner-container ">
          <div className='hero-text'>
            <h2 className="hero-title ">Welcome to a family of future leaders</h2>
            <p className="hero-subheading ">The ELP Portal connects you to a community of like-minded young leaders and opens doors of opportunities for you.</p>
           <Link to='/signup'> <button className="hero-button ">+ Join Us</button></Link>
          </div>
          
          <div className='hero-img'><img  src={hero} alt="hero" className='hero-image' /></div>
          
        </div>
      </div>
    </section>
    
  );
};

export default Hero;