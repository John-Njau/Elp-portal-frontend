import React from 'react';
import './about.css'


const About = () => {
  return (
      <div className='about_container' id='about'>
          <div className='about_us'>
          <p>About us</p>
          </div>
          <div className='about_us_div'>
              <p>ELP is a hub for students who have received scholarships through Wings to Fly and the Equity Group Foundation, 
                as well as those who have joined after completing their KCSE exams. The portal serves as a platform for ELP scholars 
                to connect with each other and access resources such as mentorship programs, career advice, and job opportunities. 
                The community is dedicated to creating positive change in society and offers a supportive network for members to achieve 
                their personal and professional goals. Equity Group Foundation is committed to providing sustainable support to ELP scholars, 
                and the website keeps members up to date with the latest news and events. By registering for the ELP portal, scholars can tap into 
                a wealth of knowledge and resources and become part of a larger community that is making a difference in the world.</p>
          </div>
          <div className='lower_box'>
            <div className='our_philosophy'>
              <p>Our Philosophy</p>
            </div>
              <p>We believe in the importance of giving back to our communities, and we encourage our scholars to use their education and skills to make 
                a positive impact in society. We believe that education is not just about personal achievement, but about creating a brighter future for all.
              </p>
            <div className='purpose_mission_vision'>
              <div className='pmv_box'>
                <p className='pmv_common'>Purpose</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Etiam eu turpis molestie</p>
              </div>
                
              <div className='pmv_box'>
                <p className='pmv_common'>Mission</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
                
              <div className='pmv_box'>
                <p className='pmv_common'>Vision</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>

              <div className='our_philosophy'>
                <p>Our Core Values</p>
              </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Etiam eu turpis molestiedictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
            </div>
      </div>

  );
}

export default About;
