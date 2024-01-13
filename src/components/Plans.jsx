import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img src={Single} alt="" className='mx-auto w-20 mt-[-3rem] bg-white' />
        <h2 className='font-bold text-2xl text-center py-8'>Web development</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
          <p p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
          <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 bg-gray-100 rounded-lg hover:scale-105 duration-300'>
        <img src={Double} alt="" className='mx-auto w-20 mt-[-3rem] bg-white' />
        <h2 className='font-bold text-2xl text-center py-8'>Digital Marketing</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
          <p p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
          <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <img src={Triple} alt="" className='mx-auto w-20 mt-[-3rem] bg-white' />
        <h2 className='font-bold text-2xl text-center py-8'>App Development</h2>
        <p className='text-center text-4xl font-bold'>$149</p>
        <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
          <p p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
          <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
      </div>



      {/* <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div> */}
      </div>
    </div>
  )
}
