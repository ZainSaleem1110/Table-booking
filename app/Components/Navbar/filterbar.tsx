import React, { useState } from 'react'
import { FoodCategories } from '@/Constant/constant'
import Image from 'next/image'
import FilterIcon from '@/public/Images/filter.png'
import FilterbarModal from './filterbarModal'

function Filterbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='w-full relative mt-[-60px]'>
        <div className='bg-[#ffb700] rounded-md h-[60px] w-full mt-8 p-1 gap-1 md:flex hidden'>
          <input className='h-full pl-3 outline-none border-none rounded-md w-[30%]' placeholder=' Search Restaurants' />
          <div className='h-full w-[30%]'>
            <select className="h-full w-full px-3 outline-none border-none rounded-md bg-white">
              <option value="" disabled>Select Cuisine</option>
              {FoodCategories && FoodCategories?.length > 0 && FoodCategories.map((items: any, index: number) => {
                return (
                  <option key={index} value={items.name}>{items.name ?? ""}</option>
                )
              })}
            </select>
          </div>
          <input type='date' className='h-full px-3 outline-none border-none rounded-md w-[20%]' placeholder='Date' />
          <input className='h-full pl-3 outline-none border-none rounded-md w-[20%]' placeholder='Persons' />
          <button className='h-full bg-[#003b95] text-white w-[10%] rounded-md'>Search</button>
        </div>
      </div>
      <div className='fixed top-[250px] left-0 md:hidden flex w-[40px] h-[40px] bg-white rounded-md shadow-md justify-center items-center z-10 cursor-pointer' onClick={() => { setOpen(true) }}>
        <Image src={FilterIcon} alt="filter" width={25} height={25} />
      </div>
      <FilterbarModal 
        show={open}
        onClose={()=>{setOpen(false)}}
        FoodCategories={FoodCategories}
      />
    </>
  )
}

export default Filterbar