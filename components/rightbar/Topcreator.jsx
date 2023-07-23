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
    nick:"@tuncerbostan",
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
      <span className='text-xs dark:text-[#D463F9] text-[#616161] cursor-pointer hidden md:flex'>See All</span>
    </div>

    <div className="h-[23vh] md:min-h-[38vh] w-full md:w-[90%] gap-11  md:gap-3 my-3 p-4 flex flex-row md:flex-col overflow-x-auto md:overflow-y-auto md:rounded-2xl  md:dark:bg-black dark:bg-[#121212] bg-[#F9F6FE] md:bg-white">
      {
        Topcreatorarr.map((item,index)=>(
          <div key={index} className='flex md:flex-row flex-col min-w-[18vw] md:w-full items-center gap-2 md:h-[40px]  '>
    <div className=' hidden md:flex'>
  <Image 
    src={item.img}
    className='flex border dark:border-[#D463F9] rounded-full'
    alt='adss'
  width={60}
  height={0}
  />
   
   </div>
   <div className=' flex md:hidden'>
  <Image 
    src={item.img}
    className='flex border dark:border-[#D463F9] rounded-full'
    alt='adss'
  width={100}
  height={100}
  />
   
   </div>
          
          <div className='flex justify-center h-full w-full flex-col ' >
            <div className=' font-bold text-[14px] md:text-[12px]'>{item.name}</div>
            <div className='text-[12px] md:text-[10px] dark:text-[#D463F9]'>{item.nick}</div>
          </div>
          

          <div className='flex md:hidden'>
          <Button
          btnLabel='Follow'
          rounded="rounded-md"
          mainButton
          />
         </div>
         <div className='hidden md:flex'>
          <Button
           btnLabel='Follow'
           rounded="rounded-3xl"
          />
         </div>
      </div>
          
        ))
      }
    
    </div>
    </>

  )
}

export default Topcreator