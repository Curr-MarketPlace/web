import Image from 'next/image'
import React from 'react'
import Header from './Header'
const History = () => {
  const historyArr = [
    {
      name: 'Osman Bey #1299',
      nick: 'Ottoman NFT',
      img: '/Ellipse2.png'
    },
    {
      name: 'Kanuni Sultan Süleyman #1529',
      nick: 'Ottoman NFT',
      img: '/EllipseKanuni.png'
    },
    {
      name: 'Fatih Sultan Mehmed #1453',
      nick: 'Ottoman NFT',
      img: '/EllipseFatih.png'
    }
  ]
  return (
    <>
      <Header title={'History'} />

      <div className=' px-5 md:px-0 min-h-[18%] w-full md:w-[90%] flex flex-col mb-6 rounded-2xl gap-3 '>
        {historyArr.map((item, i) => (
          <div key={i} className='flex  w-full items-center gap-2 h-[40px] '>
            <Image
              src={item.img}
              className='border dark:border-[#D463F9] rounded-full'
              alt='adss'
              width={40}
              height={40}
            />
            <div className='flex justify-center h-full w-[70%] flex-col'>
              <div className='font-bold text-[14px] md:text-[12px]'>
                {item.name}
              </div>
              <div className='text-[12px] md:text-[10px] dark:text-[#D463F9]'>
                {item.nick}
              </div>
            </div>
            <div className='flex justify-end text-sm md:text-xs dark:text-[#D463F9] text-[#616161] w-[30%]'>
              <span>0.5250 ETH</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default History
