import React from 'react'

function Portfolio() {
  return (
   <div className='h-screen w-screen relative overflow-hidden'>
        <img src='/mandala2.png' className='absolute h-[20%]  sm:h-[80%] z-2 -right-75 -bottom-70'/>
        <div className='h-full w-full flex flex-col overflow-visible mx-auto relative z-2  pt-16'>

            
            <img src='/camera.svg' alt='camera' className='absolute h-50 top-[60%] left-10 sm:left-15 sm:h-90 sm:top-35'/>

            {/* mandala */}
            
            
            <p className='halant-regular text-center text-2xl sm:text-3xl'>The Highlight Reel</p>
            <p className='halant-regular text-textColor mt-3 text-center text-xl'>Watch the magic we've captured</p>

            

            <div className='flex-1 relative pt-15'>
                {/* ************frame**************** */}
                <div className="h-50 sm:h-105 relative flex items-center justify-between mx-auto aspect-[7/4.3] bg-[url('/VideoFrame.png')] bg-cover bg-center">
                    <button className='left-0  m-4 bg-white h-[68%] flex justify-center items-center w-16'>
                        <img src='/arrow.png' className='h-10 sm:h-25'/> 
                    </button>


                    {/*********  can be replaced with the i frame ************/}
                    <div className="flex-1 h-[68%] cursor-pointer flex items-center justify-center bg-[url('/image1.png')] bg-cover bg-center">
                        <img src='/youtubeicon.png' className='h-8 sm:h-14'/>
                    </div>


                    <button className='left-0  m-4 bg-white h-[68%] flex justify-center items-center w-16'>
                        <img src='/arrow.png' className='h-10 sm:h-25 scale-x-[-1]'/> 
                    </button>
                </div>
            

            </div>
        </div>
    </div>
  )
}

export default Portfolio