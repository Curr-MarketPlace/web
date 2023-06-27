import React from 'react'
import MainCard from "./MainCard"
import Button from "./Button"
const page = () => {
  return (
    <div className='bg-[#F9F6FE] h-[100%] overflow-y-auto ' >
      <MainCard/>
      <div className='flex items-center justify-between w-full h-[64px]'>
           <span className='font-semibold text-base text-black'>Hot bids</span>
           <div className='flex flex-row gap-4'>
           
           <Button title={"Art"}/>
           <Button title={"Music"}/>
           <Button title={"Utility"}/>
              
           </div>
      </div>
      </div>
  )
}

export default page