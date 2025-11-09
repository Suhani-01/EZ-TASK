import React from 'react'

function Button({content}) {
  return (
    <>
    <button className='cursor-pointer bg-primary text-white text-sm py-2 px-4 rounded-full'>
        {content}
    </button>
    </>
  )
}

export default Button