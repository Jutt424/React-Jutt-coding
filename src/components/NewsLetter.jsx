import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] py-4' >
    <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]' >
        <div className='p-2'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
            <span className='text-white'>
            Sign up to our newsletter and stay up to date.
            </span>
        </div>
        <div className=' '>
            <input type="text" className='p-3  mr-2 text-slate-600 ' placeholder="Email" />
            <button className='bg-black text-white w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            <br />
            <p className='text-white'>We care bout the protection of your data. Read our <br /> 
            <a href="" className='text-black'>Privacy Policy</a>
            </p>
        </div>
    </div>
    </div>
      
  )
}
