import React from 'react'
import Cities from '../Sliders/Cities'

function Destinations() {
  return (
    <div className='xl:w-[60%] lg:w-[80%] w-[90%]'>
      <h2 className='sm:text-[32px] text-[18px] font-bold sm:text-start text-center md:mb-10 mt-5'>Destinations we love</h2>
      <Cities/>
    </div>
  )
}

export default Destinations