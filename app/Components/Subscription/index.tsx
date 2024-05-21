import React from 'react'

function Subscription() {
  return (
    <div className='bg-[#003b95] w-full h-[400px] mb-20 flex flex-col items-center justify-center'>
      <h2 className='sm:text-[32px] text-[18px] font-bold sm:text-start text-center text-white'>Stay in the know</h2>
      <p className="sm:w-[50%] text-white mt-3 sm:text-[16px] text-[14px] text-center sm:px-0 px-5">Sign up to get marketing emails from TableBooking.com, including promotions, rewards, best restaurants experiences and information about TableBooking.com{"’"}s.</p>
      <div className="mt-10 sm:w-[600px] w-[90%] h-[50px] flex gap-2">
        <input type="text" placeholder='Your email address' className="h-full w-[75%] rounded-lg pl-5 outline-none border-none" />
        <button className='bg-[#006ce4] h-full w-[100px] rounded-lg text-white font-bold'>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscription