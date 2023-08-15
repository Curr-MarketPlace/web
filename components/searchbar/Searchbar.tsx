'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
// import ConnectWallet from "./ConnectWallet"
import ProfileButton from './ProfileButton'
import { BiSearch } from 'react-icons/bi'

type SearchbarProps = {
  drawerHidden: any
}
const searchbar: React.FC<SearchbarProps> = ({ drawerHidden }) => {
  return (
    <div className='flex w-full md:p-0 justify-between items-center md:flex-row flex-row-reverse     '>
      <div className='search-button hidden md:flex relative justify-start items-center w-full  '>
        <div className=' ml-4 flex justify-center items-center absolute '>
          <Image src={'/vector.png'} alt='adsa' width={25} height={20} />
        </div>
        <input
          className=' w-full p-3 pl-14 focus:outline-double focus:outline-[#901BB7] text-sm placeholder-purple-700 border-2 !border-[#901BB7] rounded-full bg-gray-50 '
          placeholder='Search ...'
          required
        ></input>
      </div>
      <div className='flex md:hidden '>
        <BiSearch color='#3E06D6' size={40} />
      </div>
      <div className=' flex md:hidden text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-l from-purple-600  to-indigo-700  dark:from-pinkGrad-100  dark:bg-gradient-to-l dark:to-pinkGrad-100  '>
        Curr Marketplace
      </div>
      <ProfileButton drawerHidden={drawerHidden} />
    </div>
  )
}

export default searchbar
