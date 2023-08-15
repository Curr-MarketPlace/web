import Image from 'next/image'
import React from 'react'

const PhotosProfile = () => {
  return (
    <div className='relative min-h-[32vh] md:min-h-[36vh] w-full flex '>
      <div className='h-60 w-full absolute rounded-md '>
        <Image src={'/BackGroundPhoto.png'} alt='cami' fill />
      </div>
      <div className='relative h-40 w-40 md:mx-5 self-end  rounded-full  '>
        <Image
          src={'/ProfilePhoto.png'}
          fill
          alt='sultan'
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default PhotosProfile
