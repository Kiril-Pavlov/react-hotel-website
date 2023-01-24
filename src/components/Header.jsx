import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import CartModal from './CartModal'
import ColorButton from './ColorButton'

const Header = () => {
  return (
    <header className='fixed h-24 w-full flex items-center justify-between text-amber-700 bg-black/80'>
        <Logo/>
        <Navbar/>
        <div className='flex flex-row gap-5 mx-10'>
            <CartModal/>
            <ColorButton text='book now' link='/'/>
        </div>
    </header>
  )
}

export default Header