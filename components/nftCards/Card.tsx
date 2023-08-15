import Image from 'next/image'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { HiOutlineHeart } from 'react-icons/hi'
import { IconType } from 'react-icons'
type CardProps = {
  // onSubmit: (e:React.MouseEvent<HTMLButtonElement>)=> void
  btnLabel?: string
  rounded?: string
  size?: string
  icon?: IconType
  mainButton?: boolean
  img: string
  key: any
  // outLine?: boolean;
  // icon?: IconType
}

const Card: React.FC<CardProps> = ({
  // onSubmit,
  btnLabel,
  rounded,
  size,
  icon: Icon,
  mainButton,
  img,
  key
  // outLine,
  // icon:Icon
}) => {
  return (
    <div
      key={key}
      className='flex flex-col gap-2 h-auto w-auto dark:bg-black bg-white rounded-2xl p-3 '
    >
      <div className='flex justify-end mb-1 h-auto w-auto relative '>
        <button className='flex items-center justify-center absolute rounded-full h-7 w-7 m-2 bg-white z-10'>
          <HiOutlineHeart color='#616161' size={20} />
        </button>
        <div className='h-52 w-48 relative'>
          <Image
            src={img}
            alt='market'
            fill
            className='border dark:border-[#D463F9] rounded-xl'
          />
        </div>
      </div>

      <div className='text-item1 flex justify-between  items-center'>
        <span className=' text-base md:text-sm font-semibold'>Ape Loves</span>
        <span className='text-[#616161] dark:text-[#D463F9] text-sm md:text-xs font-medium'>
          12.2k fav
        </span>
      </div>
      <div className='text-item2 flex justify-start items-center'>
        <span className='text-[#616161] dark:text-[#D463F9] text-sm md:text-xs'>
          @Joker
        </span>
      </div>
      <div className='text-item1  flex justify-between items-center'>
        <span className='text-sm md:text-xs  text-black font-medium'>
          Current Bid
        </span>
        <span className='font-medium text-sm md:text-xs flex items-center'>
          <FaEthereum />
          9.1 ETH
        </span>
      </div>
    </div>
  )
}

export default Card
