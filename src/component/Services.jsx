import React, { useState } from "react";
import ImageCard from "./ImageCard";

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const handleHover = (index) => setActiveCard(index);
  const handleLeave = () => setActiveCard(null);

  const headings = [
    "The storyboard reveals the breadth of our craft.",
    "Filmmaking is a chance to live many lifetimes. - Robert Altman",
    "A brand is a voice, and a product is a souvenir. - Lisa Gansky",
    "V take art where it belongs, to the people. - Vernita Verma",
  ];

  // For heading, if activeCard = null → show 0th heading, else show (activeCard + 1)
  const currentHeading =
    activeCard === null ? headings[0] : headings[activeCard + 1];

  return (
    <div className="h-screen w-screen p-10 sm:p-0 relative overflow-hidden transition-all duration-700">
      {/*Border */}
      <div
        className={`absolute bottom-0 transition-opacity duration-500 ${
          activeCard ? "opacity-0" : "opacity-100"
        }`}
      >
        <img src="/Border.svg" />
      </div>

      {/*Heading*/}
      <div className="h-full w-full overflow-visible mx-auto relative sm:pt-16">
        <div className="transition-all w-auto duration-500">
          <p className="halant-regular text-center text-2xl sm:text-3xl">
            {currentHeading}
          </p>
          {
            <img src="/Vector5.svg" className="h-9 w-full mx-auto -mt-2" />
          }
        </div>

        {/*Cards Section*/}
        <div className="flex flex-wrap sm:flex-nowrap gap-5 sm:gap-6 justify-center mt-10 sm:mt-22 transition-all duration-700">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
              className={`relative h-45 w-35 sm:h-100 sm:w-70 transition-all duration-700 ease-in-out
                ${
                  activeCard === null
                    ? index === 0
                      ? "sm:rotate-8 sm:-translate-x-10 sm:-translate-y-8"
                      : index === 1
                      ? "sm:-translate-y-2"
                      : "sm:-rotate-8 sm:translate-x-10 sm:-translate-y-8"
                    : activeCard === index
                    ? "sm:rotate-0 sm:translate-x-10 scale-110 z-50"
                    : "opacity-0 scale-0"
                }`}
            >
              <img
                className={`absolute hidden sm:block z-100 h-20 transition-all duration-500 ${
                  index === 0
                    ? "-left-18 -top-8 -rotate-8"
                    : index === 1
                    ? "left-20 -top-10"
                    : "-right-18 -top-8 rotate-35"
                } ${activeCard ? "opacity-0" : "opacity-100"}`}
                src="/sticker.png"
              />

              {/* Sticker */}
              <ImageCard index={index} active={activeCard === index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;