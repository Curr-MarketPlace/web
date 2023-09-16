import Image from 'next/image'
import React, { useState } from 'react'

import Link from 'next/link'

const Bottombar = () => {
  return (
    <div className='flex flex-col gap-4 items-start p-0 w-full h-auto '>
      <Link href={`/`}>
        <div className='flex flex-row w-full justify-start gap-4 pl-8 cursor-pointer'>
          {/* <FaReact width={20} height={20} style={style}  /> */}
          <Image src={'/vector.png'} alt='asd' width={20} height={20} />

          <div className='textStyle '>Home</div>
        </div>
      </Link>
      <Link href={`/Market`}>
        <div className='flex flex-row w-full justify-start gap-4 pl-8 cursor-pointer'>
          {/* <FaReact width={20} height={20} style={style}  /> */}
          <Image src={'/vector.png'} alt='asd' width={20} height={20} />

          <div className='textStyle '>Market</div>
        </div>
      </Link>
      <Link href={`/Trends`}>
        <div className='flex flex-row w-full justify-start gap-4 pl-8 cursor-pointer'>
          {/* <FaReact width={20} height={20} style={style}  /> */}
          <Image src={'/vector.png'} alt='asd' width={20} height={20} />

          <div className='textStyle '>Trends</div>
        </div>
      </Link>
      <Link href={`/Collections`}>
        <div className='flex flex-row w-full justify-start gap-4 pl-8 cursor-pointer'>
          {/* <FaReact width={20} height={20} style={style}  /> */}
          <Image src={'/vector.png'} alt='asd' width={20} height={20} />

          <div className='textStyle '>Collections</div>
        </div>
      </Link>
    </div>
  )
}

export default Bottombar
