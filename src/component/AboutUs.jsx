import React from 'react'
import BookMark from './BookMark'

function AboutUs() {
  return (
    <>
    <div className='h-screen w-screen relative overflow-hidden p-10 sm:p-20'>
        <div className="flex gap-3 sm:gap-4 flex-col sm:flex-row h-full sm:w-[1300px] mx-auto relative z-2 items-center">
            {/********************* left content *********************/}
            <div className='sm:w-4/9 pt:20 sm:pt-26 flex gap-3 sm:gap-6 flex-col'>
                <p className='halant-regular text-center text-xl sm:text-[1.6rem] text-textColor'>A montage of familiar faces and names.</p>
                <p className='instrument-sans w-88 mx-auto text-center leading-5 text-textColor'>Some stories come from the biggest names. Others begin with bold, rising voices.<br/>We’ve been fortunate to walk alongside both - listening, creating, and building stories that matter.</p>
                
                {/****************BookMarks*************************/}
                <div className='flex sm:mt-10 items-center '>
                    <BookMark content="Projects" number="85"/>
                    <BookMark content="Happy Clients" number="50"/>
                    <BookMark content="Experts Team" number="10"/>
                </div>
            </div>

            {/********************* right content *********************/}
            <div className='sm:w-5/9 h-full flex  relative sm:pt-1'>
                <p className='island-moments-regular text-textColor text-center mx-auto w-[90%] text-3xl sm:text-[56px] leading-7 sm:leading-16'>Every project is more than just a brief - it’s a new chapter waiting to be written.
Together, we've crafted tales that inspire, connect, and endure.</p>

                {/*********   company section *******/}
              
                    <img className='absolute -bottom-7 sm:-bottom-17 right-20 sm:right-40 h-50 sm:h-63' src='/mountain.png'/>
                    <img className='absolute animate-spin h-110 right-10 -bottom-50 sm:-bottom-85 sm:right-17 sm:h-150' src='/Companies.png' style={{ animationDuration: '50s' }}/>
               
            </div>
        </div>
    </div>

    </>
  )
}

export default AboutUs