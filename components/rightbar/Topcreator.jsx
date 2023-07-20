import Image from 'next/image'
import React from 'react'
import Button from '../buttons/Button'

const Topcreatorarr=[
  {
    name:"Osmanbey",
    nick:"@osmankagan",
    img:"/Ellipse2.png"
  },
  {
    name:"Joker",
    nick:"@melihkaanrac",
    img:"/Ellipse.png"

  },
  {
    name:"Atesh",
    nick:"@tuncerbostanci",
    img:"/Ellipse3.png"

  },
  {
    name:"Rapid",
    nick:"@kursaderduhan",
    img:"/Ellipse4.png"

  },
  {
    name:"NorasTech",
    nick:"@keremnoras",
    img:"/Ellipse5.png"

  },
  
]

const Topcreator = () => {
  return (
    <>
    <div className='flex justify-between items-center  w-[90%] h-6'>
      <span className='font-bold text-base'>Top Creator</span>
      <span className='text-xs dark:text-[#D463F9] text-[#616161] cursor-pointer'>See All</span>
    </div>
    <div className=" h-auto w-[90%] gap-3 my-3 flex flex-col   rounded-2xl p-4 dark:bg-black bg-white ">
      {
        Topcreatorarr.map((item,index)=>(
          <div key={index} className='flex  w-full items-center gap-2 h-[40px] '>
          <Image 
          src={item.img}
          className='border dark:border-[#D463F9] rounded-full'
          alt='adss'
          width={40}
          height={40}
          />
          <div className='flex justify-center h-full w-full flex-col ' >
            <div className=' font-bold text-[12px]'>{item.name}</div>
            <div className='text-[10px] dark:text-[#D463F9]'>{item.nick}</div>
          </div>
          <Button
          btnLabel='Follow'
          rounded="rounded-3xl"
        
          size="[10px]"
          />
      </div>
          
        ))
      }
    
    </div>
    </>

  )
}

export default Topcreator