import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'

const TrendingAuctions = () => {
  const arr = [
    {
      image: '/Trending.png',
      name: 'OsmanBey',
      balance: '5000'
    },
    {
      image: '/Trending2.png',
      name: 'NorasTech',
      balance: '3400.5'
    },
    {
      image: '/Trending3.png',
      name: 'Atesh',
      balance: '2250.25'
    },
    {
      image: '/Trending4.png',
      name: 'Rapid NFT',
      balance: '1235.2'
    }
  ]
  return (
    <div className='grid grid-cols-2 gap-3  md:flex flex-row w-full px-5 h-auto '>
      {arr.map((item, index) => (
        <div key={index} className='flex flex-col w-full items-start h-full '>
          <Link href={'/CollectionDetail'}>
            <div className='flex items-center justify-center relative  md:w-44 md:h-44 mb-1'>
              <div className='flex flex-col items-center justify-center text-white absolute gap-2 opacity-100'>
                <span className='font-semibold text-xl'>{item.name}</span>
                <span className='font-medium text-xs'>{item.balance} ETH</span>
              </div>

              <Image
                src={item.image}
                alt='asd'
                className='border border-[#D463F9] rounded-xl'
                height={250}
                width={250}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TrendingAuctions
