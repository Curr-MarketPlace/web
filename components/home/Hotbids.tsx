import Image from 'next/image'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { HiOutlineHeart } from 'react-icons/hi'
import Card from '../nftCards/Card'

const Hotbits = () => {
  const arr = [
    {
      image: '/Apeloves.png'
    },
    {
      image: '/Apeloves2.png'
    },
    {
      image: '/Apeloves3.png'
    },
    {
      image: '/Apeloves.png'
    },
    {
      image: '/Apeloves2.png'
    },
    {
      image: '/Apeloves3.png'
    }
  ]
  return (
    <div className='flex flex-row gap-6 pl-5 md:pl-0 w-full overflow-hidden  overflow-x-visible scroll-x'>
      {arr.map((item, i) => (
        <Card img={item.image} key={i} />
      ))}
    </div>
  )
}

export default Hotbits
