import React from 'react'
import { Link } from 'react-router-dom';

import { links } from "../data/links";

const NavbarMobile = ({hamStatus,setHamStatus}) => {
  return (
    <div className={`${hamStatus ? 'scale-x-100' : 'scale-x-0'} lg:hidden absolute w-10/12 left-[8.33%] top-28 bg-black/80 h-96 duration-300`}>
      <div className='flex'>
        {links.map(link=>(
          <Link to={link.linkTo} key={link.linkName}>
            {link.linkName}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavbarMobile