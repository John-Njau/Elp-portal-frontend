import React from 'react'
import { LandingAbout, LandingEvents, LandingHome,LandingNavbar } from './landingComponents';
import LandingFooter from './landingComponents/LandingFooter';

const LandingPage = () => {
  return (

    <>
     <LandingNavbar />
     <LandingHome />
     <LandingAbout />
     <LandingEvents />
     <LandingFooter />
    </>

  )
}

export default LandingPage;