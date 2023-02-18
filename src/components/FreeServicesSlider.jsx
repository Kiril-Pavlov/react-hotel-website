import React, {useState} from 'react'

import ServicesCard from './ServicesCard'

import {services} from "../data/services"

const FreeServicesSlider = () => {
      // states for active slider and number of sliders on screen
  const [activeSlider, setActiveSlider] = useState(0);
  const [slidersNumber, setSlidersNumber] = useState(3);
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