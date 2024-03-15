import React from 'react'
import { Typed } from 'react-typed'



const Hero = () => {
  return (
    <div className='text-white'>
        
        <div className=' mt-[-76px] h-screen w-full
           text-center flex flex-col justify-center items-center'>
            
            <p className='text-[#00df9a] font-bold p-2'>
                GROWING WITH DATA ANALYTICS
            </p>
            
            <h1 className='md:text-5xl sm:text-4xl 
              text-xl font-bold md:py-6'>Grow with data.</h1>
            
            <div className='flex justify-center items-center '>
                <p className='md:text-5xl sm:text-4xl 
                  text-xl font-bold py-4'>Fast, flexible for BTB, BTC, SAAS</p> 
            </div>

            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to 
            increase for BTB,BTC & SAAS platforms </p>
            <button className='bg-[#00df9a] w-[200px] 
              font-medium my-6 mx-auto py-3 text-black rounded-md'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero