import React from 'react'
import Hero from './hero/hero'
import FeatureSection from './features/features'
import './landing.scss'
import Header from './header/header'
import Footer from '../../layouts/common/footer/Footer'
// import ComponentFooter from '../../layouts/common/footer/componentFooter'
import About from './about/about'
import MainLayoutNoAuth from '../../layouts/MainLayoutNoAuth'

const LandingPage = () => {
  return (
    <div className='landing'>
     <Header />
      <Hero />
      <FeatureSection />
      <About />
      <Footer />
      {/* <ComponentFooter /> */}
    </div>
  )
}

export default  MainLayoutNoAuth(LandingPage)
