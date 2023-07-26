import React from 'react'

const ButtonGroup = () => {
  return (
    <>
    <div className='flex flex-row gap-12  w-[100%]'>
      <span className='text-2xl font-semibold flex md:hidden text-black dark:text-white'>Market</span>
    
    <div className='flex  gap-2 w-[100vw] overflow-x-auto pr-12 '>

           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white ">All</button>
           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white">Art</button>
           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white">Gaming</button>
           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white">Photography</button>
           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white">Music</button>


          
        
           
    </div>
    </div>
    </>


  )
}

export default ButtonGroup