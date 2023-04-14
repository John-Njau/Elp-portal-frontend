import { getButtonUnstyledUtilityClass } from '@mui/base';
import { CompressOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainLayoutAuth from '../../../layouts/MainLayoutAuth'
import { chaptersdata } from './chapters-data'
import './ChapterDetails.scss';
// import defaultchapter from '../../../assets/images/hubsbanner.jpg'
import { useLocation, useNavigate } from 'react-router-dom';


function SingleChapter() {

  
  const [chapter, setChapter] = useState({});
 
  const location = useLocation();
  console.log('state', location)
  const navigate = useNavigate(); 
 
  useEffect(() => {
    if(location.state) {
      const chapter = location.state.data; 
      setChapter(chapter);
    }
    else{
     // navigate to chapters page
     navigate('/chapters');
    }
    
  }, [])



  return (
   <div className='single-chapter'>
    <section className="chapter-intro">
      
      <h2 className="chapter-title">{chapter?.name}</h2>
      <div className="chapter-image-container">
        {<img className='chapter-image' src={chapter?.chapter_profile_image} alt={`${chapter.name} banner`}  />  }
        
      </div>
      <p className="chapter-description">{chapter?.description}</p>
     
    </section>
    <section className="chapter-info">
      <p className='about-title'>ABOUT</p>
      <p className="chapter-about">{chapter?.description}</p>
    </section>
    <section className="chapter-info">
      <p className='about-title'>Upcoming Events</p>
      <p className="chapter-about">{chapter?.description}</p>
    </section>
    <section className="chapter-info">
      <p className='about-title'>Recent Events</p>
      <p className="chapter-about">{chapter?.recent_events}</p>
    </section>
    
   </div> 
  )
}

export default MainLayoutAuth(SingleChapter);