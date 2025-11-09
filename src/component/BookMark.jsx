import React from 'react'

function BookMark({content,number}) {
  return (
    <div className="instrument-sans -mr-8 sm:-mr-16 z-2 bg-[url('/bookbg.png')] flex gap-3 flex-col items-center justify-center bg-cover bg-center h-35 sm:h-55 aspect-square rotate-14">
        <div className='text-3xl sm:text-6xl'>{number}+</div>
        <div className='text-primary text-sm '>{content}</div>
    </div>
  )
}

export default BookMark