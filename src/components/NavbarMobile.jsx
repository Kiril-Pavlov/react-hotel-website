import React from 'react'

const NavbarMobile = ({hamStatus,setHamStatus}) => {
  return (
    <div className={`${hamStatus ? 'scale-x-100' : 'scale-x-0'} lg:hidden absolute w-10/12 left-[8.33%] top-28 bg-black/80 h-96 duration-300`}>

    </div>
  )
}

export default NavbarMobile