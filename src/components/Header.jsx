import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import CartModal from "./CartModal";
import ColorButton from "./ColorButton";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          {isOpen ? (
            <AiOutlineClose size={25} fill="white" onClick={()=>setIsOpen(!isOpen)}/>
          ) : (
            <GiHamburgerMenu size={25} fill="white" onClick={()=>setIsOpen(!isOpen)}/>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
