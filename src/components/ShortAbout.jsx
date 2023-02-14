import React from 'react'

import {FaShuttleVan, FaSwimmingPool} from 'react-icons/fa'
import {MdOutlineRoomService} from 'react-icons/md'
import {GiVideoCamera} from 'react-icons/gi'

const ShortAbout = () => {
    let services = [
        {
            name: "Airport transfer",
            icon: <FaShuttleVan/>
        },
        {
            name: "All Inclusive",
            icon: <MdOutlineRoomService/>
        },
        {
            name: "Swiming Pool",
            icon: <FaSwimmingPool/>
        },
        {
            name: "Video surveilance",
            icon: <GiVideoCamera/>
        },
    ]
  return (
    <div className='bg-lightBlackClr'>
        <div className='max-w-5xl px-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 justify-between -top-12 relative'>
            {services.map(service=>(
                <div key={service.name} className='bg-black text-white flex flex-col items-center justify-center p-5 gap-2 h-24'>
                    <div className='text-4xl'>{service.icon}</div>
                    <div>{service.name}</div>
                </div>
            ))}
        </div>
        <div>
            <div>
                img
            </div>
            <div>
                
            </div>
        </div>
        <div>
            content-img
        </div>
    </div>
  )
}

export default ShortAbout