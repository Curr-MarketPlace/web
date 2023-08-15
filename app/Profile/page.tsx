import React from 'react'
import Rightbar from '@/components/rightbar/Rightbar'
import Image from 'next/image'
import Photos from './PhotosProfile'
import ProfileBio from './ProfileBio'
import { BiSearch } from 'react-icons/bi'
import { RiReactjsLine } from 'react-icons/ri'
import { Grid1, Grid5, Grid2 } from 'iconsax-react'
import Card from '@/components/nftCards/Card'
const arr = [
  {
    image: '/Apeloves.png'
  },
  {
    image: '/Apeloves2.png'
  },
  {
    image: '/Apeloves3.png'
  },
  {
    image: '/Apeloves.png'
  },
  {
    image: '/Apeloves2.png'
  },
  {
    image: '/Apeloves3.png'
  }
]
const page = () => {
  return (
    <div className='flex flex-row h-full  w-full overflow-y-auto'>
      <div className=' flex flex-col h-full w-full md:w-full items-start gap-5 overflow-y-auto md:py-5 '>
        <div className=' px-5 pt-5 md:pt-0 w-full'>
          <Photos />
        </div>
        <ProfileBio />
        <div className='flex flex-col w-full h-auto gap-1 md:gap-5 px-5'>
          <div className='flex flex-row w-full gap-5 px-5 md:px-0 '>
            <span className='text-[#901BB7] font-medium text-base md:text-sm'>
              Collected
            </span>
            <span className='text-[#616161] font-medium text-base md:text-sm'>
              Favorited
            </span>
            <span className='text-[#616161] font-medium text-base md:text-sm'>
              Activity
            </span>
          </div>
          <hr className='border-t border-gray-400 w-full my-2 ' />
          <div className='flex items-center flex-row w-full gap-4 px-5 md:px-0 '>
            <button className='flex flex-row items-center justify-center bg-[#616161]  rounded-md  py-1 px-2 gap-1'>
              <RiReactjsLine size={20} color='white' />
              <span className='text-white'> Filter</span>
            </button>
            <div className='search flex  md:justify-between items-center   w-full'>
              <div className='search-button flex relative justify-start items-center w-full  '>
                <div className='pl-2 md:pl-4  flex justify-center items-center absolute'>
                  <BiSearch color='#616161' size={20} />
                </div>
                <input
                  className=' w-full md:px-3 py-1 pl-8 md:pl-14  text-sm placeholder-[#616161] border-2 !border-[#616161] rounded-md bg-gray-50 '
                  placeholder='Search ...'
                  required
                ></input>
              </div>
            </div>
            <div className='flex flex-row w-auto gap-3'>
              <Grid1 size='24' color='#FF8A65' />
              <Grid2 size='24' color='#FF8A65' />
              <Grid5 size='24' color='#FF8A65' />
            </div>
          </div>
          <div className='w-full h-auto md:flex md:flex-wrap grid grid-cols-2 flex-row gap-4 md:gap-10 pb-[50%] md:py-0 py-5 '>
            {arr.map((i, index) => (
              <Card img={i.image} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Rightbar />
    </div>
  )
}

export default page
