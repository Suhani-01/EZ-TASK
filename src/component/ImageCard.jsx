import React from "react";

function ImageCard({ index, active }) {
  const images = ["/image1.png", "/image2.png", "/image3.png"];
  const hoverImages = ["/hover1.png", "/hover2.png", "/hover3.png"];
  const titles = ["Film Production", "Post Production", "Creative Direction"];
  const vect1 = ["/hV11.png", "/hv21.svg", "/hv31.svg"];
  const vect2 = ["/hV14.svg", "/hv22.svg", "/hv32.svg"];
  const vect3 = ["/hV13.svg", "/hv23.svg", "/hv33.svg"];
  const vect4 = ["/hV12.svg", "/hv24.svg", "/hv34.svg"];

  const hoverTexts = [
    <div className="w-100 text-xl  instrument-sans" key="film">
      <p>
        Who says films are just an escape?
        <br />
        We see them as a way to live many lives - to feel, to explore, and to
        tell stories that stay. And with each film, we carry new memories and
        new reasons to keep creating.
      </p>
      <p className="mt-2">V crafts:</p>
      <ul className="list-disc pl-6">
        <li>Documentaries</li>
        <li>Corporate Videos</li>
        <li>2D Animation Videos</li>
        <li>3D Animation Videos</li>
      </ul>
    </div>,
    <div className="w-100 text-xl  instrument-sans" key="post">
      <p>
        A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.

        <br />
        We shape brands that people remember, return to, and fall in love with.

      </p>
      <p className="mt-2">V creates:</p>
      <ul className="list-disc pl-6">
        <li>Branding & Communication</li>
        <li>Market Mapping</li>
        <li>Content Management</li>
        <li>Social Media Management</li>
        <li>Rebranding</li>
      </ul>
    </div>,
    <div className="w-100 text-xl  instrument-sans" key="creative">
      <p>
        Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
        <br />
        Through every festival, every performance, and every gathering, we help stories find their stage and their people.
      </p>
      <p className="mt-2">V curates:</p>
      <ul className="list-disc pl-6">
        <li>Art Festivals</li>
        <li>Live Performances</li>
        <li>Community Events</li>
        <li>Cultural Storytelling</li>
      </ul>
    </div>,
  ];

  return (
    <div className="h-full relative w-full">
      <div
        className={`flex items-center justify-start transition-all duration-700 ease-in-out h-full ${
          active
            ? index === 0
              ? "-translate-x-10"
              : index === 1
              ? "-translate-x-70"
              : "-translate-x-130"
            : "translate-x-0"
        } `}
        style={{
          width: active ? "100%" : "100%",
        }}
      >
        {/* ---- IMAGE CARD ---- */}
        <div
          className={`relative shadow-xl bg-white overflow-visible transition-all duration-700 ease-in-out flex-shrink-0`}
          style={{
            width: "100%",
            height: "100%",
            transform: active ? "rotate(0deg)" : "",
          }}
        >
          {/* back button */}
          <button
            className={`z-200  border instrument-sans py-1 text-sm border-primary px-5 text-primary rounded-2xl absolute -top-10 -left-15 transition-opacity duration-300 
    ${active ? "opacity-100" : "opacity-0"}`}
          >
            Back
          </button>

          {/* explore button */}
          <div className={`absolute -bottom-6 left-90 ${active ? "opacity-100" : "opacity-0"}`}>
            <button
              className={`z-200  instrument-sans py-1 text-xs  px-5  w-40  transition-opacity duration-300 `}
            >
              Explore Now
            </button>
            <img src="/hoverArrow.png" className="h-8 translate-x-10"/>
          </div>

          {/* vectors */}
          <img
            src={vect1[index]}
            className={`z-200  py-1 h-19 text-sm  absolute -bottom-10 -left-25 transition-opacity duration-300 
    ${active ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={vect2[index]}
            className={`z-200  py-1 h-28 text-sm  absolute -bottom-10 -right-140 transition-opacity duration-300 
    ${active ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={vect3[index]}
            className={`z-200  py-1 h-17 text-sm  absolute bottom-30 -right-125 transition-opacity duration-300 
    ${active ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={vect4[index]}
            className={`z-200  py-1 h-25 text-sm  absolute -top-5 -right-140 transition-opacity duration-300 
    ${active ? "opacity-100" : "opacity-0"}`}
          />

          <div className="h-full overflow-visible relative w-full flex flex-col justify-between p-3">
            <div
              className={`h-[90%] w-full bg-cover bg-center overflow-hidden  transition-all duration-700 ease-in-out`}
              style={{
                backgroundImage: `url(${
                  active ? hoverImages[index] : images[index]
                })`,
              }}
            ></div>
            <div className="halant-regular sm:text-xl text-center sm:pt-3">
              {titles[index]}
            </div>
          </div>
        </div>

        {/* ---- TEXT SECTION ---- */}
        <div
          className={`overflow-visible transition-all duration-700 ease-in-out ${
            active
              ? "opacity-100 translate-x-6 w-[500px]"
              : "opacity-0 translate-x-0 max-w-0"
          }`}
        >
          {active && (
            <div className="text-start w-full halant-regular sm:text-lg p-6">
              {hoverTexts[index]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
