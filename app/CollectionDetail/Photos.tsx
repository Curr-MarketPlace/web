import Image from 'next/image'
import React from 'react'

const Photos = () => {
  return (
    <div className='relative min-h-[24vh] md:min-h-[36vh] w-full  flex '>
      <div className='md:h-60 h-44 w-full absolute rounded-md '>
        <Image src={'/Cami.png'} alt='cami' fill />
      </div>
      <div className='relative md:h-40 md:w-40 h-28 w-28 mx-5 self-end  rounded-full  '>
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
