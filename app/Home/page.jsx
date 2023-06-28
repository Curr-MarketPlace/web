import React from 'react'
import MainCard from "./MainCard"
import Hotbits from "./Hotbits"
import './button.css'

const page = () => {
  return (  
    <div className='bg-[#F9F6FE] h-[100%] mb-6 overflow-y-auto ' >
      <MainCard/>
      <div className='flex items-center justify-between w-full h-[64px]'>
           <span className='font-semibold text-base text-black'>Hot bids</span>
           <div className='flex flex-row gap-4'>
           
           <button className="btn">Art</button>
           <button className="btn">Music</button>
           <button className="btn">Utility</button>

           </div>

      </div>

      <Hotbits/>

      </div>
  )
}

export default page