import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../data/links'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-2'>
      {links.map(link=>(
        <Link 
          to={link.linkTo} 
          key={link.linkName}
          className='border-2 py-5 px-5'
        >
          {link.linkName}
        </Link>
      ))}
    </div>
  )
}

export default Navbar