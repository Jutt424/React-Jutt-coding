import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
export default function Header() {
    const [toogle,setToggle] = useState(false);
  return (
    <div>
      <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] flex justify-between items-center py-[12px] mx-auto'>
            <div className='text-3xl font-bold'>
            JUTT  Coding
            </div>
            {
                toogle ?
                <AiOutlineClose onClick={() => setToggle(!toogle)} className="text-white text-2xl md:hidden block" />
                :
                <AiOutlineMenu onClick={() => setToggle(!toogle)} className= 'text-white text-2xl md:hidden block' />

            }
            <ul className='hidden md:flex text-white gap-10'>
                <li>
                    Home
                </li>
                <li>
                    Company
                </li>
                <li>
                    Resources
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
            {/* Responsive Menu */}
            <ul className={`duration-300 md:hidden w-full fixed bg-black top-[92px] h-screen text-white gap-10   ${toogle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='p-5'>
                    Home
                </li>
                <li className='p-5'>
                    Company
                </li>
                <li className='p-5'>
                    Resources
                </li>
                <li className='p-5'>
                    About
                </li>
                <li className='p-5'>
                    Contact
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

