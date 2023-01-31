import React, {useState} from "react";
import { Link } from "react-router-dom";

import { links } from "../data/links";

import {BsChevronLeft} from 'react-icons/bs'

const NavbarMobile = ({ hamStatus, setHamStatus }) => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div
      className={`${
        hamStatus ? "scale-x-100" : "scale-x-0"
      } lg:hidden absolute w-10/12 left-[8.33%] top-28 bg-black/80 h-96 duration-300`}
    >
      <div className="flex flex-col">
        {links.map((link) => (
          <div className="flex items-center justify-between">
            <Link
              to={link.linkTo}
              key={link.linkName}
              className="border-2 py-2 w-full h-10"
            >
              {link.linkName}
            </Link>
            <div className="border-2 w-10 h-10 flex items-center justify-center">
              <BsChevronLeft  size={25} fill="white"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarMobile;
