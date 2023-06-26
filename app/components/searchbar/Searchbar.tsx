import React from 'react'

const searchbar = () => {
  return (
    <div className="w-full min-h-[12%] flex justify-center items-center">

<input  
className=" w-full p-3 focus:outline-double focus:outline-[#901BB7] text-sm !text-[#901BB7] border-2 !border-[#901BB7] rounded-full bg-gray-50 " placeholder="Search ..." required></input>

      </div>
  )
}

export default searchbar