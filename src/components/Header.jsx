import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import CartModal from "./CartModal";
import ColorButton from "./ColorButton";

import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  return (
    <header className="bg-black/20 fixed h-24 w-full flex items-center justify-between text-amber-700 z-10">
      <Logo />
      <Navbar />
      <div className="flex flex-row gap-5 mx-5">
        <CartModal />
        <div className="hidden lg:flex">
          <ColorButton text="book now" link="/" />
        </div>
        <div className="flex lg:hidden">
          <GiHamburgerMenu  size={25} fill='white'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
