import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className='h-screen w-screen relative overflow-hidden p-10 sm:p-20'>
        <img className=' hidden sm:block  absolute z-100 h-170 -bottom-78 -left-60' src='/mandala2.png'/>
        <div className='h-full w-full flex flex-col overflow-visible mx-auto relative z-2'>
        {/* <img src='/mandala2.png' className='absolute h-170 z-2 -left-90 -bottom-101'/> */}
        <img src='/mandala2.png' className=' hidden sm:block absolute h-[95%] z-2 -right-87 -top-97'/>

        <div className='h-full w-full flex flex-col-reverse sm:flex-row overflow-visible justify-center items-center mx-auto relative z-2  pt-16'>

            <div className='instrument-sans pt-10 sm:pt-0 sm:flex-1'>
                <div className='sm:w-[62%] text-sm sm:text-base text-center sm:text-start leading-5 mx-auto pb-20'>
                    Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.<br/>Let’s catch up over coffee.<br/>Great stories always begin with a good conversation
                </div>
            </div>

            <div className='sm:flex-1'>
                <ContactForm/>
            </div>


        </div>
        
    </div>
    </div>
  )
}

export default Contact