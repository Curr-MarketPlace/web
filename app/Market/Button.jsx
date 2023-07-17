import React from 'react'

const Button = () => {
  return (
    <div className='flex  gap-2'>
        <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white ">All</button>
           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white">Art</button>
           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white">Gaming</button>
           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white">Photography</button>
           <button className="miniButtons !rounded-lg !bg-white dark:!bg-[#121212] dark:text-white">Music</button>
    </div>
  )
}

export default Button