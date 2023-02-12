import React from 'react'

import heroImg from '../assets/home-hero.jpg'
import heroImgMobile from '../assets/home-hero-mobile.jpg'

const HomeHero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* bg-cover bg-center bg-hero animate-background-zoom */}
      <img src={heroImg} alt="" className='absolute hidden lg:block animate-background-zoom h-full object-cover z-0'/>
      <img src={heroImgMobile} alt="" className='absolute lg:hidden animate-background-zoom h-full object-cover z-0'/>
      <div className='absolute z-10 w-full h-full bg-black/30'>
          <div className='max-w-5xl mx-auto px-5 flex flex-col justify-center h-full lg:flex-row lg:items-center gap-10'>
            <div className='border-2 lg:w-7/12'>
              LEFT
            </div>
            <div className='border-2 lg:w-5/12'>
              RIGHT
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomeHero