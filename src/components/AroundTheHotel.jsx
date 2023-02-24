import React from 'react'

import BorderButton from "./BorderButton"

import img1 from "../assets/service-1.jpg"
import img2 from "../assets/service-2.jpg"
import img3 from "../assets/service-3.jpg"

const AroundTheHotel = () => {
    let services = [
        {
            img:img1,
            tag:"Free",
            name:"Gym",
            description:"Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
            linkTo:"/"
        },
        {
            img:img2,
            tag:"10 euro per guest",
            name:"Pool",
            description:"Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
            linkTo:"/"
        },
        {
            img:img3,
            tag:"Free",
            name:"Lounge Bar",
            description:"Image for cattle earth. May one Which life divide sea. Commodi soluta minima nemo,…",
            linkTo:"/"
        },
    ]

  return (
    <div className="bg-blackClr">
      <div className=" pt-20 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-white pb-5">
            Around The Hotel
          </div>
          <div className="text-left text-fontClrGrey font-semibold mb-10 w-full lg:w-3/4">
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem.
          </div>
        </div>
        <BorderButton text="all services" link="/" />
      </div>
      <div className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {services.map((service)=>(
            <div className='w-full h-92 overflow-hidden'>
                <img src={service.img} alt="" className='h-full '/>
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default AroundTheHotel