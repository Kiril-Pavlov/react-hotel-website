import React from 'react'
import FreeServices from '../components/FreeServices'

//components
import HomeHero from '../components/HomeHero'
import ShortAbout from '../components/ShortAbout'
import Capacity from '../components/Capacity'
import OurBestRooms from '../components/OurBestRooms'
import AroundTheHotel from '../components/AroundTheHotel'
import Feedback from '../components/Feedback'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <ShortAbout/>
      <FreeServices/>
      <Capacity />
      <OurBestRooms />
      <AroundTheHotel />
      <Feedback />
    </div>
  )
}

export default Home