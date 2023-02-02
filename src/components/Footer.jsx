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
      <div className='bg-black flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white font-normal p-4 gap-2'>
        <div>©2023 Kiril's Hotel. All Rights Reserved.</div>
        <div>Developed by: <a href="https://pavlov.mk/">Pavlov Kiril</a></div>
      </div>
    </footer>
  )
}

export default Footer