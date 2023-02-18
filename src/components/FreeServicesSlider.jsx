import React from 'react'

import ServicesCard from './ServicesCard'

import {services} from "../data/services"

const FreeServicesSlider = () => {
  return (
    <div  className="flex items-center justify-center gap-5">
       {services.map((card)=>(
        <div>
            <ServicesCard tag={card.tag} url={card.url}/>
        </div>
       )
       )}
    </div>
  )
}

export default FreeServicesSlider