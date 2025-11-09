import React from 'react'

function Hero() {
  return (
    <div className='flex w-screen h-screen justify-center sm:items-center p-10 sm:p-20 relative overflow-hidden'>
        


        <div className='flex flex-col sm:flex-row h-[90%]  w-full mx-auto items-center overflow-hidden'>
          {/*mandala section*/}
          <div className='relative z-4  sm:w-[50%] h-[45%] sm:h-full flex justify-center items-center'>
                <img src='/Hero Mandala.png' alt='mandala' className='h-60 lg:h-111 md:h-90 sm:h-80 aspect-square'/>
                <img src='VFilms Logo.png' alt='logo' className='absolute h-17 sm:h-29'/>
          </div>

          {/*Hero Content*/}
          <div className='flex z-2  flex-col gap-5 sm:gap-10 sm:w-[50%]'>
              <div className='island-moments-regular text-5xl sm:text-6xl md:text-7xl text-center text-black'>Varnan is where stories find their voice and form</div>
              <div className='text-primary halant-regular text-xl sm:text-2xl text-center'>Films . Brands . Art</div>
              <div className='text-xs text-textColor w-xs text-center mx-auto instrument-sans leading-3.4'>Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
V doesn’t just tell stories - V honors them.</div>
          </div>
        </div>
    </div>
  )
}

export default Hero