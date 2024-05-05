import React from 'react'
import { FoodCategories } from '@/Constant/constant'

function HeroSection() {
  return (
    <div className='w-full relative'>
      <h2 className='text-white text-[42px] font-bold'>Find your table for any cuisines</h2>
      <p className='text-white text-[24px]'>Make a free reservation and search best restaurants for good meals.</p>
      <div className='bg-[#ffb700] rounded-md h-[60px] w-full absolute left-0 mt-8 p-1 flex gap-1'>
        <input className='h-full pl-3 outline-none border-none rounded-md w-[30%]' placeholder=' Search best restaurants' />
        <div className='h-full w-[30%]'>
          <select className="h-full w-full px-3 outline-none border-none rounded-md">
          <option value="" disabled>Select Cuisine</option>
            {FoodCategories && FoodCategories?.length > 0 && FoodCategories.map((items:any,index:number)=>{
              return(
                <option value={items.name}>{items.name ?? ""}</option>
              )
            })}
          </select>
        </div>
        <input type='date' className='h-full px-3 outline-none border-none rounded-md w-[20%]' placeholder='Date' />
        <input className='h-full pl-3 outline-none border-none rounded-md w-[20%]' placeholder='Number of persons' />
        <button className='h-full bg-[#003b95] text-white w-[10%] rounded-md'>Search</button>
      </div>
    </div>
  )
}

export default HeroSection