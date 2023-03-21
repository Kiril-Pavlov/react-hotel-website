import React from 'react'
import RestaurantAbout from '../components/RestaurantAbout'
import RestaurantCapacity from '../components/RestaurantCapacity'
import RestaurantGallery from '../components/RestaurantGallery'
import RestaurantHero from '../components/RestaurantHero'
import RestaurantMenu from '../components/RestaurantMenu'
import RestaurantStaff from '../components/RestaurantStaff'
import RestaurantVideo from '../components/RestaurantVideo'
import RestaurantFeedback from '../components/RestaurantFeedback'

const Restaurant = () => {
  return (
    <div>
      <RestaurantHero />
      <RestaurantAbout />
      {/* Similar to our best rooms */}
      <RestaurantMenu />
      {/* Similar to free services */}
      <RestaurantGallery />
      {/* Similar to Capacity */}
      <RestaurantCapacity />
      <RestaurantStaff />
      <RestaurantVideo />
      {/* Similar to Feedback */}
      <RestaurantFeedback />
    </div>
  )
}

export default Restaurant