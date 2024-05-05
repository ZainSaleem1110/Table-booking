'use client'
import React from 'react'
import Image from 'next/image'
import Categories from './categories';
import HeroSection from './heroSection';
import FlagImage from '@/public/Images/Flags/flag.png'
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <div className='bg-[#003b95] w-full flex flex-col justify-center items-center pt-3 py-16'>
        <div className='xl:w-[60%] md:w-[80%] w-[100%] h-[70px] text-white flex items-center justify-between'>
          <h2 className="font-bold text-[24px]">TableBooking.com</h2>
          <div className='flex items-center gap-[15px]'>
            <p className='cursor-pointer hover:bg-[#1a4fa0] p-3 rounded-md'>Cur</p>
            <div className='cursor-pointer hover:bg-[#1a4fa0] p-3 rounded-md'>
              <div className='rounded-full w-[25px] h-[25px] overflow-hidden '>
                <Image src={FlagImage} alt="country-flags" width={25} height={25} />
              </div>
            </div>
            <div className='hover:bg-[#1a4fa0] p-3 rounded-md'>
              <AiOutlineQuestionCircle className='text-[24px] cursor-pointer' />
            </div>
            <button className='border-none bg-none hover:bg-[#1a4fa0] p-3 rounded-md'>List your property</button>
            <button className='border-none bg-white rounded-md text-[#003b95] h-[40px] px-5 hover:bg-[#1a4fa0] hover:text-white'>Register</button>
            <button className='border-none bg-white rounded-md text-[#003b95] h-[40px] px-5 hover:bg-[#1a4fa0] hover:text-white'>Sign in</button>
          </div>
        </div>
        <div className='pt-5 flex justify-start xl:w-[60%] md:w-[80%] w-[100%]'>
          <Categories />
        </div>
        <div className='flex justify-start xl:w-[60%] md:w-[80%] w-[100%] pt-14'>
          <HeroSection/>
        </div>
      </div>
    </>
  )
}

export default Navbar