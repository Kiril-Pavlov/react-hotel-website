import React from 'react'

import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-blackClr'>
      <div className='flex flex-col lg:grid lg:grid-cols-4 px-5 py-5 lg:py-10 max-w-5xl mx-auto'>
        <div className='flex flex-col items-center lg:items-start gap-5'>
          <Logo/>
          <div className='text-fontClrGrey lg:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur accusantium aspernatur sint nisi ullam ab aut molestiae, sunt voluptatem porro itaque esse impedit cum, ea sed incidunt consequatur laborum dolorem?</div>
          <div className='text-white'>
            Socials
          </div>
        </div>
        <div className='text-white'>
          Menu
          Links
        </div>
        <div  className='text-white'>
          Meet Kiril's Hotel
          FAQ
          Gallery
          Menu
          Restaurant
        </div>
        <div  className='text-white'>
          Instagram Images
          6 images
        </div>
      </div>
      <div className='bg-black flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white font-normal p-4 gap-2 lg:max-w-5xl mx-auto'>
        <div>©2023 Kiril's Hotel. All Rights Reserved.</div>
        <div>Developed by: <a href="https://pavlov.mk/">Pavlov Kiril</a></div>
      </div>
    </footer>
  )
}

export default Footer