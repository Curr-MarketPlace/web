'use client'
import React from 'react'
import ButtonGroup from './Components/ButtonGroup'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <div className='flex flex-row  gap-4 h-full w-full '>
      <div className='hidden md:flex'>
        <ButtonGroup />
      </div>

      <div className='flex flex-col md:h-full h-[100vh] w-full p-4 bg-white rounded-md dark:bg-black'>
        <AiOutlineArrowLeft
          className='flex md:hidden'
          color='#3E06D6'
          size={30}
          onClick={() => router.push('/Settings')}
        />
        {children}
      </div>
    </div>
  )
}

export default SettingsLayout
