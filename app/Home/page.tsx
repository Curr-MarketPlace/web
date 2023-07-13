import React from 'react'
import MainCard from "./MainCard"
import Hotbids from "./Hotbids"
import TrendingAuctions from "./TrendingAuctions"
const page = () => {
  return (  
    <div className=' h-[100%]  overflow-y-auto ' >
      <MainCard/>
      <div className='flex items-center justify-between w-full h-[64px]'>
           <span className='font-semibold text-base '>Hot bids</span>
           <div className='flex flex-row gap-4'>
           
           <button className="btn">Art</button>
           <button className="btn">Music</button>
           <button className="btn">Utility</button>

           </div>

      </div>

      <Hotbids/>


      <div className='flex items-center justify-between w-full h-[64px]'>
           <span className='font-semibold text-base '>Trending Auctions</span>
      </div>

      <TrendingAuctions/>
       
      </div>
  )
}

export default page