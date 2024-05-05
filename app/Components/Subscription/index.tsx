import React from 'react'

function Subscription() {
  return (
    <div className='bg-[#003b95] w-full h-[400px] mb-20 flex flex-col items-center justify-center'>
      <h2 className='text-[32px] font-bold text-white'>Stay in the know</h2>
      <p className="w-[50%] text-center text-white mt-3">Sign up to get marketing emails from TableBooking.com, including promotions, rewards, best restaurants experiences and information about TableBooking.com{"’"}s.</p>
      <div className="mt-10 w-[600px] h-[50px] flex gap-2">
        <input type="text" placeholder='Your email address' className="h-full w-[75%] rounded-lg pl-5 outline-none border-none" />
        <button className='bg-[#006ce4] h-full w-[25%] rounded-lg text-white font-bold'>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscription