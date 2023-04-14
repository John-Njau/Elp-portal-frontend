

import React from 'react'

const Card_Six = ({
    cardTitle,
    cardFooter,
  
  }) => {
  return (
          <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div class="card card-small h-100">
                  <div class="card-header border-bottom">
                    <h6 class="m-0">{cardTitle}</h6>
                  </div>
                  <div class="card-body d-flex py-0">
                   <ul className="">
                    <li>worldbank</li>
                    <hr/>
                    <li>IMF</li>
                    <hr/>
                    <li>Gatsbay</li>
                    <hr/>
                    <li>Baroda</li>
                    <hr/>
                    <li>indian</li>
                   </ul>
                  </div>
                  <div class="card-footer border-top">
                    {cardFooter}
                  </div>
                </div>
              </div>
  )
}

export default Card_Six
