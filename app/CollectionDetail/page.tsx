import React from 'react'
import Rightbar from '@/components/rightbar/Rightbar'
import Image from 'next/image'
import Photos from './Photos'
import DetailBio from './DetailBio'
import { BiSearch } from 'react-icons/bi'
import { RiReactjsLine } from 'react-icons/ri'
import { Grid1, Grid5, Grid2 } from 'iconsax-react'
const page = () => {
  return (
    <div className='flex flex-row h-full w-full'>
      <div className='  flex flex-col h-full w-[100vw] md:w-full items-start pt-6 overflow-y-auto'>
        <Photos />
        <DetailBio />
        <div className='flex flex-col w-full h-16'>
          <div className='flex flex-row w-full gap-5'>
            <span className='text-[#901BB7] font-medium text-sm'>
              Collected
            </span>
            <span className='text-[#616161] font-medium text-sm'>
              Favorited
            </span>
            <span className='text-[#616161] font-medium text-sm'>Activity</span>
          </div>
          <hr className='border-t border-gray-400 w-full my-2' />
          <div className='flex items-center flex-row w-full gap-4 '>
            <button className='flex flex-row items-center justify-center bg-[#616161]  rounded-md py-2 px-6 gap-1'>
              <RiReactjsLine size={20} color='white' />
              <span className='text-white'> Filter</span>
            </button>
            <div className='search flex justify-between items-center w-full'>
              <div className='search-button hidden md:flex relative justify-start items-center w-full  '>
                <div className='ml-4 flex justify-center items-center absolute'>
                  <BiSearch color='#616161' size={20} />
                </div>
                <input
                  className=' w-full p-3 pl-14  text-sm placeholder-[#616161] border-2 !border-[#616161] rounded-md bg-gray-50 '
                  placeholder='Search ...'
                  required
                ></input>
              </div>
            </div>
            <div className='flex flex-row w-auto gap-3'>
              <Grid1 size='32' color='#FF8A65' />
              <Grid2 size='32' color='#FF8A65' />
              <Grid5 size='32' color='#FF8A65' />
            </div>
          </div>
        </div>
      </div>

      <Rightbar />
    </div>
  )
}

export default page
