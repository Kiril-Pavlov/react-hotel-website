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
            name: "AAll Inclusive",
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
    <div>
        <div className=''>
            mapping  services
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