import React from 'react'

import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-darkLighter'>
      <div>
        <div>
          <Logo/>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur accusantium aspernatur sint nisi ullam ab aut molestiae, sunt voluptatem porro itaque esse impedit cum, ea sed incidunt consequatur laborum dolorem?</div>
          <div>
            Socials
          </div>
        </div>
        <div>
          Menu
          Links
        </div>
        <div>
          Meet Kiril's Hotel
          FAQ
          Gallery
          Menu
          Restaurant
        </div>
        <div>
          Instagram Images
          6 images
        </div>
      </div>
      <div>
        <div>Copyright</div>
        <div>Developed by</div>
      </div>
    </footer>
  )
}

export default Footer