import React from 'react'
import MainLayoutNoAuth from '../../../layouts/MainLayoutNoAuth'
import css from './features.module.scss'
import { features } from '../../../resources/data'


const FeatureSection = () => {
  return (
    <div id='features'>
      {/* features section */}
        <section className={css.features_wrapper}>
        <span className={css.title}>Features</span>
        <div className={css.features}>
          {
            features.map((feature, i) => {
                return <div className={css.card} key={i}>
                  <img src={feature.img} alt="" />
                  <div className={css.feature}>
                      <span className=''>{ feature.name}</span>
                      <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</span>
                  </div>
              </div>
            })
          }
        </div>
    </section>
    </div>
  )
}

export default FeatureSection