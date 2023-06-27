import Image from 'next/image'
import React from 'react'

const MainCard = () => {
  return (
    <div className='w-full h-auto '>
        <Image
        src={"/ad-card.png"}
        alt='card'
        width={1000}
        height={1000}
        />
    </div>
  )
}

export default MainCard