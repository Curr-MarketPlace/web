"use client"
import Image from 'next/image'
import React from 'react'

const LeftBar = () => {
  return (
    <div className=" h-screen w-[18%] flex flex-col items-start ">
      <div className=' bg-red-300 mt-8 gap-5  h-[5vh] text-[#3E06D6] font-bold lg:text-lg w-full flex items-center justify-center'>
       <Image
       src={"/vector.png"}
       alt='asd'
       width={35}
       height={35}
       />
  
        Curr Marketplace 
        </div>
        <div className='flex flex-col bg-red-700 w-[98px] h-[336px]'>selam</div>
    </div>
  )
}
  
export default LeftBar  