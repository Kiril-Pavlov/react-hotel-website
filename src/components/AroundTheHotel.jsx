import React from 'react'

import BorderButton from "./BorderButton"

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
      <div className="px-5">
        
      </div>
    </div>
  )
}

export default AroundTheHotel