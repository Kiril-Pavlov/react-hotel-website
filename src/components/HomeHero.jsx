import React from 'react'

import heroImg from '../assets/home-hero.jpg'

const HomeHero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* bg-cover bg-center bg-hero animate-background-zoom */}
      <img src={heroImg} alt="" className='absolute animate-background-zoom w-full object-cover z-0'/>
    </div>
  )
}

export default HomeHero