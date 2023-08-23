import Image from 'next/image'
import React from 'react'
import InputGroup from './InputGroup'
const page = () => {
  return (
    <div className='h-full w-full  overflow-y-auto gap-6 flex flex-col '>
      <div className='relative min-h-[24vh] md:min-h-[45vh] w-full  flex justify-center '>
        <div className='md:h-60 h-44 w-full absolute rounded-md '>
          <Image
            src={'/AccountSettingsBackGround.png'}
            alt='bgSettingsAcc'
            fill
          />
        </div>
        <div className='relative md:h-56 md:w-56 h-28 w-28 self-end  rounded-full  flex '>
          <Image
            src={'/AccountSettingsProfile.png'}
            fill
            alt='profileSettings'
            className='rounded-full'
          />
        </div>
      </div>
      <p className='flex items-center justify-center font-medium text-base'>
        Account Detail
      </p>
      <div className='md:px-24  flex items-center justify-center'>
        <InputGroup />
      </div>
    </div>
  )
}

export default page
