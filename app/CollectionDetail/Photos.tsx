import Image from 'next/image'
import React from 'react'

const Photos = () => {
  return (
    <div className='relative h-[36vh] w-full  flex '>
      <div className='h-60 w-full absolute rounded-md'>
        <Image src={'/Cami.png'} alt='cami' fill />
      </div>
      <div className='relative h-40 w-40 mx-5 self-end  rounded-full border-2 border-white '>
        <Image
          src={'/FatihSultanMehmed.png'}
          fill
          alt='sultan'
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Photos
