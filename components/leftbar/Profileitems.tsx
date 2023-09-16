import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Setting2, FolderFavorite, Dropbox, Calendar } from 'iconsax-react'

const Topbar = () => {
  return (
    <div className='flex flex-col  gap-4 items-start p-0 w-full h-auto'>
      <Link href={'/Profile'}>
        <div className='flex flex-row  w-full justify-start gap-4 pl-8 cursor-pointer'>
          <Dropbox size='24' color='#3E06D6' />
          <div className='text-[#616161] text-lg font-semibold md:textStyle '>
            My Portfolio
          </div>
        </div>
      </Link>
      <Link href={'/Favourites'}>
        <div className='flex flex-row  w-full justify-start gap-4 pl-8 cursor-pointer'>
          <FolderFavorite size='24' color='#3E06D6' />
          <div className='text-[#616161] text-lg font-semibold md:textStyle '>
            Favourites
          </div>
        </div>
      </Link>
      <Link href={'/History'}>
        <div className='flex flex-row  w-full justify-start gap-4 pl-8 cursor-pointer'>
          <Calendar size='24' color='#3E06D6' />
          <div className='text-[#616161] text-lg font-semibold md:textStyle '>
            History
          </div>
        </div>
      </Link>
      <Link href={'/Settings'}>
        <div className='flex flex-row  w-full justify-start gap-4 pl-8 cursor-pointer'>
          <Setting2 size='24' color='#3E06D6' />
          {/* <Image src={'/vector.png'} alt='asd' width={20} height={20} /> */}
          <div className='text-[#616161] text-lg font-semibold md:textStyle '>
            Settings
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Topbar
