import React from "react";

import logoImg from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center justify-center ml-10">
      <img src={logoImg} alt="Logo" className="w-48" />
    </div>
  );
};

export default Logo;
