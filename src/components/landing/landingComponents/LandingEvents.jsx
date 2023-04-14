import React from 'react'
import MainLayoutLandingPage from '../../../layouts/MainLayoutLandingPage'
import images from '../../../constants/images'
import './landingEvents.scss'

const LandingEvents = () => {
  return (
    <div>
      
      <div className=''>
        <img className='eventImage_1 eventImages' src={ images.eventImage_1 } alt="pic1" />
        <img className='eventImage_2 eventImages' src={ images.eventImage_2 } alt="pic2" />
        <img className='eventImage_3 eventImages' src={ images.eventImage_3 } alt="pic3" />
        <img className='eventImage_4 eventImages' src={ images.eventImage_4 } alt="pic4" />
        <img className='eventImage_5 eventImages' src={ images.eventImage_5 } alt="pic5" />
      </div>
    </div>
    
  )
}

// export default MainLayoutLandingPage(LandingEvents ,'events' )
export default LandingEvents;
