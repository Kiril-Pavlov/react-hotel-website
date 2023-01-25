import React from "react";
import { Link } from "react-router-dom";

import { links } from "../data/links";

const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-2">
      {links.map((link) => (
        <div className="py-1 group" key={link.linkName}>
          <Link to={link.linkTo} className="py-5 px-5 md:cursor-pointer">
            {link.linkName}
          </Link>
          {link.submenu && (
            <div className="absolute top-15 opacity-0 group-hover:opacity-100 hover:opacity-100 duration-300">
              <div className="overflow-hidden">
                <div className="bg-black/90 w-5 h-5 relative left-5 rotate-45 top-3"></div>
              </div>
              <div className="flex flex-col bg-black/90 p-8 rounded-2xl gap-4">
                {link.sublinks.map((sublink) => (
                  <Link
                    to={sublink.sublinkTo}
                    key={sublink.sublinkName}
                    className="text-white text-left"
                  >
                    {sublink.sublinkName}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
