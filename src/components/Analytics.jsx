import React from 'react'
import laptop from "../asssets/laptop.jpg"



const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt='laptop' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>gcx usydg dsyu uysd yugyuc gcx usydg dsyu uysd yugyuc
                gcx usydg dsyu uysd yugyuc gcx usydg dsyu uysd yugyuc
                gcx usydg dsyu uysd yugy ucgcx usydg dsyu uysd yugyuc</p>
                <button className=' bg-black text-[#00df9a] w-[200px] 
              font-medium my-6 mx-auto py-3 rounded-md md:mx-0'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics