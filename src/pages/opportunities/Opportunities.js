import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import css from './Opportunities.module.scss'

import { features } from '../../resources/data'
import MainLayoutAuth from '../../layouts/MainLayoutAuth'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import {axiosPublic} from '../../lib/axios/axios'
import useAuth from '../../hooks/useAuth'
import { Opportunity_Card } from '../../components/cards'


const Opportunities = () => {
  const {auth} = useAuth()
  const axiosInstance = useAxiosPrivate();
  const [opportunities, setOpportunities] = useState({})
  const [updateLevel, setUpdateLevel] = useState(90)
  const [showProfile, setShowProfile] = useState(false)
  let defaultInterest = {
                          "user": auth.user_id,
                          "Opportunity": 0
                        }

  const navigate = useNavigate()

  const handleClick = (i = null) => {
    console.log('job_id: ',i, ' checking if profile\'s updated: currently -> ', updateLevel)
    // check if user profile is fully updated and redirect to profile if not (benchmark - 90% filled)
    if (updateLevel >= 90) {
      setShowProfile(!showProfile)
      // register user's interest in the opportunity (how do I get the user's id?)
      defaultInterest.Opportunity = i
      console.log(defaultInterest)
      registerInterest(defaultInterest)
    }
    else
      navigate('/profile')
  }

  const getProfileUpdateLevel = () => {
    let level = 0
    // try {
      // const res = call the neccessary API
    // } catch (error) {
      // console.log('error: ', error)
      setUpdateLevel(level)
    }

  const registerInterest = async (data) => {
    try {
      const res = await axiosPublic.post('api/opportunities/registration/', data)
      console.log('register interest: ', res)
    } catch (error) {
      console.log('register interest error: ', error)
    }
  }

  useEffect(() => {
    const fetchOpp = async () => {
      try {
          const response = await axiosInstance.get('api/opportunities')
          // const response = await axiosPublic.get('api/opportunities')
          console.log(response);
          if (response.status === 200)
            setOpportunities(response.data);
      } catch (error) {
          console.log('error: ', error)
      }
    }
    fetchOpp();
    }, []);

  return (
    <div className={css.page}>
      {/* <Navbar /> */}
      <div className={css.container}>
        {/* <Sidebar /> */}
        <div className={css.main_wrapper}>
          <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <h3 class="page-title">Based on your profile</h3>
                <span class="text-uppercase page-subtitle">{opportunities.count ? opportunities.count : 0} Results</span>
              </div>
            </div>
          <div className={css.jobs}>
            {
             opportunities.results && opportunities.results.map((job, i) => {
              // features.map((job, i) => {
                return <Opportunity_Card key={i}
                          desc={job.description}
                          link={job.job_description}
                          title={job.title}
                          department={job.department}
                          deadline={job.application_deadline}
                          handleClick={() => handleClick(job.id)}
                          showProfile ={showProfile}
                        />
              })
            }
          </div>
          {/* more opportunities (most recent) */}
          <div class="page-header row no-gutters py-4">
              <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
                <h3 class="page-title">Most Recently Posted</h3>
                <span class="text-uppercase page-subtitle">{opportunities.count ? opportunities.count : 0} Results</span>
              </div>
            </div>
          <div className={css.jobs}>
            {
              // features.map((job, i) => {
                opportunities.results && opportunities.results.map((job, i) => {
                return <Opportunity_Card key={i}
                            desc={job.description}
                            link={job.job_description}
                            title={job.title}
                            department={job.department}
                            deadline={job.application_deadline}
                            handleClick={() => handleClick(job.id)}
                            showProfile ={showProfile}
                          />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayoutAuth(Opportunities)