import React from 'react'
import FreeServices from '../components/FreeServices'

//components
import HomeHero from '../components/HomeHero'
import ShortAbout from '../components/ShortAbout'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <ShortAbout/>
      <FreeServices/>
    </div>
  )
}

export default Home