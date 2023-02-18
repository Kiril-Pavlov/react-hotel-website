import React from 'react'
import FreeServicesSlider from './FreeServicesSlider'

const FreeServices = () => {
  return (
    <div  className="bg-blackClr py-20 px-5">
        <div className="text-4xl lg:text-5xl text-center w-full font-btnFont text-white pb-5">
            Kinsley is waiting for you
        </div>
        <div className="text-center text-fontClrGrey font-semibold mb-10">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex fugit ea delectus, sed voluptatem.
        </div>
        <div className='border-2'>
            <FreeServicesSlider/>
        </div>
    </div>
  )
}

export default FreeServices