'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiOutlineHeart } from 'react-icons/hi'
import { FaEthereum } from 'react-icons/fa'
const MarketItem = ({ arrItem }: any) => {
  // const handleClick = () => {
  //   // const testArr = arr.splice(0,2);
  //   // setFirstArr(testArr)
  //   console.log('this is firstArr ', firstArr);
  //   console.log('this is secondArr ', secondArr);
  //   console.log('this is thirdArr ', thirdArr);
  // };
  return (
    <>
      <div className='md:flex md:flex-wrap grid grid-cols-2 gap-6  md:gap-9 h-full w-full'>
        {arrItem.map((items: any, i: any) => (
          <div
            key={i}
            // onClick={handleClick}
            className=' flex flex-col items-start rounded-2xl gap-2  p-3 justify-start w-auto h-auto dark:bg-black bg-white'
          >
            <div className='flex justify-end  h-auto w-auto relative'>
              <div className='flex items-center justify-center absolute rounded-full h-7 w-7 m-2 bg-white'>
                <HiOutlineHeart color='#616161' size={20} />
              </div>
              <Image
                src={items.img}
                alt='market'
                width={196}
                height={201}
                className='border border-[#D463F9] rounded-xl'
              />
            </div>

            <div className='text-item1 w-full flex justify-between items-center'>
              <span className=' text-base md:text-sm font-semibold'>
                Ape Loves
              </span>
              <span className='text-[#616161]  text-sm md:text-xs font-medium dark:text-[#D463F9]'>
                12.2k fav
              </span>
            </div>
            <div className='text-item2 flex justify-start items-center'>
              <span className='text-[#616161] text-sm md:text-xs] font-medium dark:text-[#D463F9]'>
                @Joker
              </span>
            </div>
            <div className='text-item1 w-full flex justify-between items-center'>
              <span className=' text-sm md:text-xs font-medium'>
                Current bid
              </span>
              <span className='font-medium  text-sm md:text-xs flex items-center'>
                <FaEthereum />
                9.1 ETH
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default MarketItem
