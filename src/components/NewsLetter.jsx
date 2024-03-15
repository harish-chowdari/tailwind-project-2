import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>hjhzgx yugzdxjc asfzxyua sfdyu</h1>
                <p>uyasg uysagdy uyasdkj uasdbbh jhgds</p>
            </div>

            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='text-black p-3 flex w-full rounded-md to-black' type='email' placeholder='email' />
                    <button className='bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
            <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter