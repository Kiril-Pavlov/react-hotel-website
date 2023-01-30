import React from 'react'

import heroImg from '../assets/home-hero.jpg'
import heroImgMobile from '../assets/home-hero-mobile.jpg'

const HomeHero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* bg-cover bg-center bg-hero animate-background-zoom */}
      <img src={heroImg} alt="" className='absolute hidden lg:block animate-background-zoom w-full object-cover z-0'/>
      <img src={heroImgMobile} alt="" className='absolute lg:hidden animate-background-zoom w-full object-cover z-0'/>
    </div>
  )
}

export default HomeHero