'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { drawerOff } from '../../app/redux/drawer/drawerSlice'
import { useDispatch } from 'react-redux'
import Items from '../leftbar/Profileitems'
import { FaEthereum } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Drawer = () => {
  const drawer = useSelector((state: any) => state.drawer.drawer)
  const dispatch = useDispatch()

  return (
    <div className='relative md:hidden'>
      <div
        className={` z-10 top-0 opacity-50 fixed h-full w-[100vw] bg-slate-600 ${
          drawer ? 'flex' : ' hidden '
        } `}
        onClick={() => dispatch(drawerOff())}
      ></div>

      {/* İç içe geçmiş divlerin içerisine overlay eklenecek */}
      <div
        className={`top-0 flex flex-col items-center   gap-3 bg-white pt-5 text-white fixed h-full z-40  w-3/4
        ease-in-out duration-300 min-w-[68vw]  ${
          drawer ? 'translate-x-0' : '-translate-x-full '
        } `}
      >
        <div className='w-full flex gap-5 flex-col  p-5'>
          <Link
            href='Profile'
            onClick={() => dispatch(drawerOff())}
            className='relative h-32 w-32  '
          >
            <Image
              fill
              src={'/FatihSultanMehmed.png'}
              className='rounded-full'
              alt='adss'
            />
          </Link>
          <div className='flex flex-col gap-2'>
            <span className='text-black text-2xl font-semibold '>
              MelihBey#1299
            </span>
            <span className='text-base text-[#616161] font-normal flex flex-row items-center gap-2 '>
              <FaEthereum color='black' size={20} /> 0x3h2...k20
            </span>
          </div>
        </div>
        <div className='flex h-1/3  w-full'>
          {' '}
          <Items />
        </div>

        <div className='flex justify-self-end'>
          <ConnectButton />
        </div>
      </div>
    </div>
  )
}

export default Drawer

{
  /* <div className='relative'>
  <div className='absolute z-10 opacity-0 h-[100vh] w-[100vw] bg-red-700' onClick={()=>dispatch(drawerOff())}></div>

  <div className='relative'>
    <div onClick={()=>dispatch(drawerOff())} className='absolute bg-black h-14 w-full z-30'>
      bassss
    </div>
  </div>
</div> */
}
