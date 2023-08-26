import React, { useEffect } from 'react'
import { drawerOn, drawerOff } from '../../app/redux/drawer/drawerSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
// import ConnectWallet from './ConnectWallet'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import ConnectWallet from './ConnectWallet'
type ProfileButtonProps = {
  drawerHidden: any
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ drawerHidden }) => {
  const dispatch = useDispatch()
  const drawer = useSelector((state: any) => state.drawer.drawer)

  useEffect(() => {
    drawerHidden(drawer)
  }, [drawer])

  return (
    <div className='connect-and-profile-button md:min-w-[30vw]   md:w-[42%] flex md:justify-end  items-center md:gap-5 '>
      <div className='hidden md:flex'>
        {/* <ConnectButton /> */}
        <ConnectWallet />
      </div>
      {/* Mobile button */}
      <div className='flex md:hidden'>
        <button
          onClick={() => dispatch(drawerOn())}
          className='relative  inline-flex items-center justify-center w-14 h-14 overflow-hidden
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
      {/* Desktop button */}
      <div className='hidden md:flex'>
        <Link
          href={'Profile'}
          className='relative inline-flex items-center justify-center w-14 h-14 overflow-hidden
                 bg-gray-100 rounded-full  border-2 border-purple-500 hover:border-4 hover:border-purple-500'
        >
          <Image
            src={'/unnamed.jpg'}
            alt='asd'
            className='rounded-full object-cover'
            fill
          />
        </Link>
      </div>
    </div>
  )
}

export default ProfileButton
