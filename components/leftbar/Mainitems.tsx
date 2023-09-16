import Image from 'next/image'
import React, { useState } from 'react'
import { Home2, Shop, TrendUp, Box } from 'iconsax-react'
import Link from 'next/link'

const Bottombar = () => {
  return (
    <div className='flex flex-col gap-4 items-start p-0 w-full h-auto '>
      <Link href={`/`}>
        <div className='flex flex-row w-full justify-center items-center gap-[6px] pl-8 cursor-pointer'>
          <Home2 size='24' color='#3E06D6' />
          {/* <Image src={'/vector.png'} alt='asd' width={20} height={20} /> */}

          <div className='textStyle'>Home</div>
        </div>
      </Link>
      <Link href={`/Market`}>
        <div className='flex flex-row w-full justify-center items-center gap-[6px] pl-8 cursor-pointer'>
          <Shop size='24' color='#3E06D6' />
          {/* <Image src={'/vector.png'} alt='asd' width={20} height={20} /> */}

          <div className='textStyle '>Market</div>
        </div>
      </Link>
      <Link href={`/Trends`}>
        <div className='flex flex-row w-full justify-center items-center gap-[6px] pl-8 cursor-pointer'>
          <TrendUp size='24' color='#3E06D6' />
          {/* <Image src={'/vector.png'} alt='asd' width={20} height={20} /> */}

          <div className='textStyle '>Trends</div>
        </div>
      </Link>
      <Link href={`/Collections`}>
        <div className='flex flex-row w-full justify-center items-center gap-[6px] pl-8 cursor-pointer'>
          <Box width={20} height={20} color='#3E06D6' />
          {/* <Image src={'/vector.png'} alt='asd' width={20} height={20} /> */}

          <div className='textStyle '>Collections</div>
        </div>
      </Link>
    </div>
  )
}

export default Bottombar
