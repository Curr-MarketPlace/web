import React from 'react'
import { BiShareAlt, BiDotsHorizontalRounded } from 'react-icons/bi'

const DetailBio = () => {
  return (
    <div className='flex flex-col px-5 md:px-0 w-full h-auto gap-3 mt-2'>
      <div className='flex flex-row justify-between'>
        <span className='font-semibold text-2xl'>Ottoman NFT Collection</span>
        <div className='flex flex-row gap-6'>
          <BiShareAlt size={20} />
          <BiDotsHorizontalRounded size={20} />
        </div>
      </div>
      <div className='flex flex-row gap-1'>
        <span className='text-[#616161] font-normal text-sm'>by </span>
        <span className=' font-semibold text-sm'>KaanBey #1299</span>
      </div>
      <div className='flex flex-row gap-3'>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <span className='text-[#616161] font-normal text-sm'>item</span>
          <span className=' font-medium text-base'>9.956</span>
        </div>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <span className='text-[#616161] font-normal text-sm'>created</span>
          <span className=' font-medium text-base'>Sep 2022</span>
        </div>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <span className='text-[#616161] font-normal text-sm'>chain</span>
          <span className=' font-medium text-base'>Ethereum</span>
        </div>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <span className='text-[#616161] font-normal text-sm'>category</span>
          <span className=' font-medium text-base'>Music</span>
        </div>
      </div>
      <div className='font-normal  '>
        The SAN Origin NFT collection is a series of (originally) 10,000 access
        tokens, illustrated by Cromagnus. ..
      </div>
      <div className='flex flex-row '>
        <div className='flex flex-col justify-center items-center'>
          <span className=' flex flex-row font-semibold text-base'>
            <hr className='border-l border-[#616161] h-full mr-2' />
            1,321 ETH
            <hr className='border-l border-[#616161] h-full ml-2' />
          </span>
          <span className='font-normal text-xs'>total volume</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <span className=' flex flex-row font-semibold text-base'>
            <hr className='border-l border-[#616161] h-full mr-2' />
            0,0451 ETH
            <hr className='border-l border-[#616161] h-full ml-2' />
          </span>
          <span className='font-normal text-xs'>floor price</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <span className=' flex flex-row font-semibold text-base'>
            <hr className='border-l border-[#616161] h-full mr-2' />
            0,0321 WETH
            <hr className='border-l border-[#616161] h-full ml-2' />
          </span>
          <span className='font-normal text-xs'>best offer</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <span className=' flex flex-row font-semibold text-base'>
            <hr className='border-l border-[#616161] h-full mr-2' />
            3%
            <hr className='border-l border-[#616161] h-full ml-2' />
          </span>
          <span className='font-normal text-xs'>listed</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <span className=' flex flex-row font-semibold text-base'>
            <hr className='border-l border-[#616161] h-full mr-2' />
            1,965
            <hr className='border-l border-[#616161] h-full ml-2' />
          </span>
          <span className='font-normal text-xs'>owners</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <span className=' flex flex-row font-semibold text-base'>
            <hr className='border-l border-[#616161] h-full mr-2' />
            20%
            <hr className='border-l border-[#616161] h-full ml-2' />
          </span>
          <span className='font-normal text-xs'>unique owners</span>
        </div>
      </div>
    </div>
  )
}

export default DetailBio
