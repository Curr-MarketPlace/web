import React from 'react'
import { BiShareAlt, BiDotsHorizontalRounded } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
const DetailBio = () => {
  return (
    <div className='flex flex-col px-5 md:px-0 w-full h-auto gap-3 mt-2'>
      <div className='flex flex-row justify-between'>
        <span className='font-semibold text-2xl'>MelihBey#1299</span>
        <div className='flex flex-row gap-6'>
          <BiShareAlt size={20} />
          <BiDotsHorizontalRounded size={20} />
        </div>
      </div>
      <div className='flex flex-row gap-1'>
        <FaEthereum size={20} />
        <span className='text-[#616161] font-normal text-sm'>0x3a9...a23</span>
      </div>
    </div>
  )
}

export default DetailBio
