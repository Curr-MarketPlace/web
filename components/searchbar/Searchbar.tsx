import Image from 'next/image'
import React from 'react'
import ConnectWallet from "./ConnectWallet"

const searchbar = () => {
  return (

    <div className='flex flex-row m-6'>

    <div className="search-button  flex relative justify-start items-center w-full min-h-[12%] ">
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

<div className="connect-and-profile-button  w-[42%] min-h-[12%] flex justify-end items-center gap-5">

{/* <ConnectWallet/> */}
 
  <div
    className="relative inline-flex items-center justify-center w-11 h-11 overflow-hidden
 bg-gray-100 rounded-full  border-2 border-purple-500 hover:border-4 hover:border-purple-500"
  >
    <Image src={"/unnamed.jpg"} alt="asd" className="rounded-full object-cover" width={380} height={38} />
   
  </div>

  
</div>
</div>
  )
}

export default searchbar