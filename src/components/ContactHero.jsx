import React from 'react'

import img1 from "../assets/contact-1.png"
import img2 from "../assets/contact-2.png"
import img3 from "../assets/contact-3.png"

const ContactHero = () => {
    let contacts = [
        {
            url: img1,
            head: "Address",
            content: "Macedonia 1480 Kiril Street 13"
        },
        {
            url: img2,
            head: "Phone",
            content: "+93 (736) 6X8 84 84"
        },
        {
            url: img3,
            head: "E-mail",
            content: "info@kirilsplace.com"
        },
    ]
  return (
    <div>
        <div className='flex h-[60vh] overflow-hidden relative bg-contact bg-cover bg-center'>
            <h2 className='flex items-center justify-center text-center text-3xl lg:text-8xl w-full text-white font-btnFont bg-gray-800/30 font-normal'>CONTACT US</h2>

        </div>
    </div>
  )
}

export default ContactHero