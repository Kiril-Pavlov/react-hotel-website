import React from "react";

import ColorButton from "./ColorButton"

import heroImg from "../assets/home-hero.jpg";
import heroImgMobile from "../assets/home-hero-mobile.jpg";

const HomeHero = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* bg-cover bg-center bg-hero animate-background-zoom */}
      <img
        src={heroImg}
        alt=""
        className="absolute hidden lg:block animate-background-zoom h-full object-cover z-0"
      />
      <img
        src={heroImgMobile}
        alt=""
        className="absolute lg:hidden animate-background-zoom h-full object-cover z-0"
      />
      <div className="absolute z-10 w-full h-full bg-black/30">
        <div className="max-w-5xl mx-auto px-5 flex flex-col justify-center h-full lg:flex-row lg:items-center gap-10">
          <div className="border-2 lg:w-7/12">
            <div>stars</div>
            <div>title</div>
            <div>text</div>
          </div>
          <div className="lg:w-5/12 bg-blackClr p-5 flex flex-col gap-8">
            <div>
              <label htmlFor="" className="text-white flex flex-col gap-2 text-left font-normal">
                Check-in
                <input type="date" name="" id="" className="bg-lightBlackClr h-10 py-1 px-3"/>
              </label>
            </div>
            <div>
              <label htmlFor="" className="text-white flex flex-col gap-2 text-left font-normal">
                Check-out
                <input type="date" name="" id="" className="bg-lightBlackClr h-10 py-1 px-3"/>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div>
                <label htmlFor="" className="text-white flex flex-col gap-2 text-left font-normal">
                  Adults
                  <input type="number" name="" id="" className="bg-lightBlackClr h-10 py-1 px-3"/>
                </label>
              </div>
              <div>
                <label htmlFor="" className="text-white flex flex-col gap-2 text-left font-normal">
                  Children
                  <input type="number" name="" id="" className="bg-lightBlackClr h-10 py-1 px-3"/>
                </label>
              </div>
            </div>
            <div className="m-5">
              <ColorButton  text="search" link="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
