'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
// import ConnectWallet from "./ConnectWallet"
import { BiSearch } from 'react-icons/bi'
import { drawerOn, drawerOff } from '../../app/redux/drawer/drawerSlice'
import { useDispatch } from 'react-redux'
import Popup from '../popup/Popup'

const searchbar = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex  md:p-0 justify-between items-center md:flex-row flex-row-reverse my-6 mx-2'>
      <div className='search-button hidden md:flex relative justify-start items-center w-full min-h-[12%] '>
        <div className='h-6 w-6  ml-4 flex justify-center items-center absolute'>
          <Image src={'/vector.png'} alt='adsa' width={25} height={20} />
        </div>
        <input
          className=' w-full p-3 pl-14 focus:outline-double focus:outline-[#901BB7] text-sm placeholder-purple-700 border-2 !border-[#901BB7] rounded-full bg-gray-50 '
          placeholder='Search ...'
          required
        ></input>
      </div>
      <div className='flex md:hidden'>
        <BiSearch color='#3E06D6' size={40} />
      </div>
      <div className=' flex md:hidden text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-l from-purple-600  to-indigo-700  dark:from-pinkGrad-100  dark:bg-gradient-to-l dark:to-pinkGrad-100  '>
        Curr Marketplace
      </div>

      <div className='connect-and-profile-button md:min-w-[30vw]  px-4 md:w-[42%] min-h-[12%] flex md:justify-end items-center md:gap-5'>
        {/* <ConnectWallet/> */}

        <button
          onMouseOut={() => dispatch(drawerOff())}
          onClick={() => dispatch(drawerOn())}
          className='relative inline-flex items-center justify-center w-14 h-14 overflow-hidden
                   bg-gray-100 rounded-full  border-2 border-purple-500 hover:border-4 hover:border-purple-500'
        >
          <Image
            src={'/unnamed.jpg'}
            alt='asd'
            className='rounded-full object-cover'
            fill
          />
        </button>
      </div>
    </div>
  )
}

export default searchbar
