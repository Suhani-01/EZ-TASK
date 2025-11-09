import React from "react";
import ButtonHu from "./ButtonHu";


function AboutTeam() {
  return (
    <>
      <div className=" flex  h-screen p-10 sm:p-20 w-screen justify-center items-center relative overflow-hidden">
        <div className="flex flex-col sm:flex-row h-full w-screen  mx-auto relative">
          {/* left content */}
          <div className="sm:w-[37%] z-4">
            {/* bookmark */}
            <div className="flex relative justify-center items-center sm:justify-end sm:translate-x-8 -translate-y-4 sm:-translate-y-22">
              <img src="/bookmark.png" className="h-80 w-130 rotate-[0.5deg] sm:rotate-0 sm:h-100 sm:w-115" />
            </div>

            {/* India gate */}
            <div className="sm:flex justify-start hidden">
              <img
                src="IndiaGate.svg"
                className="h-80 -translate-x-10 -translate-y-28 overflow-visible"
              />
            </div>
          </div>

          {/* right content */}
          <div className="z-2 flex relative  flex-col gap-2 flex-1 justify-end items-center">

            {/************* vector1 *******************/}
            <div className="hidden sm:block  absolute z-2 -left-4 bottom-26">
              <img src="/Vector1.svg" className="h-41" />
              <div className="island-moments-regular text-2xl sm:text-3xl -translate-x-1 sm:-translate-x-26 sm:mt-3">
                Branding Experts
              </div>
            </div>

            {/************* vector2 *******************/}
            <div className="hidden sm:block  absolute z-4 left-78 top-2">
                <div className="island-moments-regular text-2xl sm:text-3xl -translate-x-10 sm:-translate-x-18 sm:mb-1">
                    Film Makers
                </div>
              <img src="/Vector2.svg" className="h-11 sm:h-17" />
              
            </div>

            {/************* vector3 *******************/}
            <div className="hidden sm:block  absolute z-2 right-10 top-20">
                <div className="island-moments-regular text-2xl sm:text-3xl mb-1">
                    Art Curators
                </div>
              <img src="/Vector3.svg" className="h-15 sm:h-25" />
              
            </div>

            {/************* team *******************/}
            <img src="team.svg" className="h-40 sm:h-80" />
            <div className="halant-regular text-center text-2xl sm:text-[1.6rem] mt-2 sm:mt-10">
              Take a closer look at the stories V bring to life.
            </div>
            <ButtonHu content="View Portfolio" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTeam;
