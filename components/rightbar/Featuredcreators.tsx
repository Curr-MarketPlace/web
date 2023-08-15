import Image from 'next/image'
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import Button from '../buttons/Button'
import Header from './Header'
const Featuredcreators = () => {
  return (
    <>
      <Header title={'Featured Creators'} />

      <div className='h-auto p-5  w-full md:w-[90%] flex flex-col rounded-2xl dark:bg-black bg-white relative'>
        <div className='flex  mb-3  gap-2 px-4 w-full items-center  h-[20%] '>
          <Image
            src={'/Ellipse2.png'}
            alt='adss'
            className='border border-[#D463F9] rounded-full'
            width={40}
            height={40}
          />
          <div className='flex justify-center h-full w-full flex-col '>
            <div className='font-bold text-base md:text-sm'>Melih Kaan</div>
            <div className='text-sm md:text-xs dark:text-[#D463F9]'>
              @melihkaanarc
            </div>
          </div>

          <BiDotsHorizontalRounded size={24} className='cursor-pointer' />
        </div>
        <div className='flex flex-row h-full w-auto gap-6 justify-center '>
          <div className='item-1 gap-1 w-[42%] h-auto flex flex-col '>
            <div className='relative h-52 w-full'>
              <Image
                src={'/FatihSultanMehmed.png'}
                alt='adss'
                unoptimized
                className='rounded-xl border dark:border-[#D463F9] '
                fill
              />
            </div>
            <div className='w-full h-auto font-bold text-base md:text-sm flex items-end'>
              Melih Bey #1299
            </div>
            <div className='w-full h-auto text-sm  dark:text-[#D463F9] text-[#616161] '>
              Ottoman NFT
            </div>
            <span className='font-medium  text-sm  flex items-center'>
              <FaEthereum />
              9.1 ETH
            </span>
          </div>
          <div className='item-1 gap-1 w-[42%] h-auto flex flex-col '>
            <div className='relative h-52 w-full'>
              <Image
                src={'/FatihSultanMehmed.png'}
                alt='adss'
                unoptimized
                className='rounded-xl border dark:border-[#D463F9] '
                fill
              />
            </div>
            <div className='w-full h-auto font-bold text-base md:text-sm flex items-end'>
              Melih Bey #1299
            </div>
            <div className='w-full h-auto text-sm  dark:text-[#D463F9] text-[#616161] '>
              Ottoman NFT
            </div>
            <span className='font-medium  text-sm  flex items-center'>
              <FaEthereum />
              9.1 ETH
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featuredcreators
