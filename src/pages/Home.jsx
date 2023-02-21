import React from 'react'
import FreeServices from '../components/FreeServices'

//components
import HomeHero from '../components/HomeHero'
import ShortAbout from '../components/ShortAbout'
import Capacity from '../components/Capacity'
import OurBestRooms from '../components/OurBestRooms'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <ShortAbout/>
      <FreeServices/>
      <Capacity />
      <OurBestRooms />
    </div>
  )
}

export default Home