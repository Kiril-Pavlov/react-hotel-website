import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center justify-center ml-5">
      <Link to="/">
        <img src={logoImg} alt="Logo" className="w-48" />
      </Link>
    </div>
  );
};

export default Logo;
