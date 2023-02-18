import React, { useState, useEffect } from "react";

import ServicesCard from "./ServicesCard";

import { services } from "../data/services";

const FreeServicesSlider = () => {
  // states for active slider and number of sliders on screen
  const [activeSlider, setActiveSlider] = useState(0);
  const [slidersNumber, setSlidersNumber] = useState(3);

      // useEffect hook to handle screen size at page load
  useEffect(() => {
    handleScreenSizes();
  }, []);

  // function to handle number of cards depending on screen size
  const handleScreenSizes = () => {
    if (window.innerWidth < 600) {
      setSlidersNumber(1);
    } else if (window.innerWidth < 1200) {
      setSlidersNumber(2);
    } else {
      setSlidersNumber(3);
    }
  }

    // slice arrays for card mapping
    let modifiedSlides = services.slice(activeSlider,activeSlider+slidersNumber)

  return (
    <div className="flex items-center justify-between gap-5">
      {modifiedSlides.map((card) => (
        <div>
          <ServicesCard tag={card.tag} url={card.url} />
        </div>
      ))}
    </div>
  );
};

export default FreeServicesSlider;
