import React from "react";

import { links } from "../data/links";

import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-blackClr">
      <div className="flex flex-col lg:flex lg:flex-row px-5 py-5 lg:py-10 max-w-5xl mx-auto gap-10">
        <div className="flex flex-col items-center lg:items-start lg:w-1/3 gap-5">
          <Logo className />
          <div className="text-fontClrGrey lg:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            accusantium aspernatur sint nisi ullam ab aut molestiae, sunt
            voluptatem porro itaque esse impedit cum, ea sed incidunt
            consequatur laborum dolorem?
          </div>
          <div className="text-white">Socials</div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-2/3">
          <div className="text-white flex flex-col gap-5">
            <div className="text-xl lg:text-3xl font-normal font-btnFont text-center lg:text-left">
              Menu
            </div>
            <ul></ul>
          </div>
          <div className="text-white flex flex-col gap-5">
            <div className="text-xl lg:text-3xl font-normal font-btnFont text-center lg:text-left">
              Meet Us
            </div>
            <ul>
              <li>FAQ</li>
              <li>Menu</li>
              <li>Restaurant</li>
            </ul>
          </div>
          <div className="text-white flex flex-col gap-5">
            <div className="text-xl lg:text-3xl font-normal font-btnFont text-center lg:text-left">
              Galery
            </div>
            <div>map images</div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="bg-black flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white font-normal p-4 gap-2 lg:max-w-5xl mx-auto">
          <div>©2023 Kiril's Hotel. All Rights Reserved.</div>
          <div>
            Developed by: <a href="https://pavlov.mk/">Pavlov Kiril</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
