import React from 'react'
import { Link } from 'react-router-dom'

import { links } from '../data/links'

const Navbar = () => {
  return (
    <div>
      {links.map(link=>(
        <Link to={link.linkTo} key={link.linkName}>
          {link.linkName}
        </Link>
      ))}
    </div>
  )
}

export default Navbar