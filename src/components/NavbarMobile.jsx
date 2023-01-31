import React, { useState } from "react";
import { Link } from "react-router-dom";

import { links } from "../data/links";

import { BsChevronDown } from "react-icons/bs";

const NavbarMobile = ({ hamStatus, setHamStatus }) => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div
      className={`${
        hamStatus ? "scale-x-100" : "scale-x-0"
      } lg:hidden absolute w-10/12 left-[8.33%] top-28 bg-black/80 h-96 duration-300`}
    >
      <div className="flex flex-col p-3 gap-2">
        {links.map((link) => (
          <div className="flex items-center justify-between gap-2">
            <Link
              to={link.linkTo}
              key={link.linkName}
              className="flex items-center justify-left pl-5 text-white w-full h-10 border-b-[1px] uppercase"
            >
              {link.linkName}
            </Link>
            {link.submenu && (
              <div className="border-2 w-10 h-10 flex items-center justify-center"
              onClick={()=>(activeLink !== link.linkName ? setActiveLink(link.linkName):setActiveLink(""))}>
                <BsChevronDown
                  size={25}
                  fill="white"
                  className={`${
                    activeLink === link.linkName ? "rotate-0" : "rotate-90"
                  } duration-300`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarMobile;
