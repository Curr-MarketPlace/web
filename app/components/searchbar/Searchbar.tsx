import Image from 'next/image'
import React from 'react'

const searchbar = () => {
  return (
    <div className="flex relative justify-start items-center w-full min-h-[12%] ">
      <div className='h-6 w-6  ml-4 flex justify-center items-center absolute'>
           <Image
           src={"/vector.png"}
           alt='adsa'
           width={25}
           height={20}
           />
      </div>
<input  
className=" w-full p-3 pl-14 focus:outline-double focus:outline-[#901BB7] text-sm placeholder-purple-700 border-2 !border-[#901BB7] rounded-full bg-gray-50 " placeholder="Search ..." required></input>
      </div>
  )
}

export default searchbar