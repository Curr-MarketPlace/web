import Image from 'next/image'
import React from 'react'
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {FaEthereum} from "react-icons/fa"
import Button from '../buttons/Button'
const History = () => {
  const historyArr=[
    {
      name:"Osman Bey #1299",
      nick:"Ottoman NFT",
      img:"/Ellipse2.png"
    }, {
      name:"Kanuni Sultan Süleyman #1529",
      nick:"Ottoman NFT",
      img:"/EllipseKanuni.png"
    }, {
      name:"Fatih Sultan Mehmed #1453",
      nick:"Ottoman NFT",
      img:"/EllipseFatih.png"
    },
  ]
  return (
<>
<div className='flex justify-between items-center w-[90%]  my-3 '>
      <span className='font-bold text-base'>History</span>
      <span className='text-xs dark:text-[#D463F9] text-[#616161] cursor-pointer'>See All</span>
    </div>
    
<div className=' min-h-[18%] w-full md:w-[90%] flex flex-col mb-6 rounded-2xl gap-3 '>
{
  historyArr.map((item,i)=>(
    <div key={i} className='flex  w-full items-center gap-2 h-[40px] '>
          <Image 
          src={item.img}
          className='border dark:border-[#D463F9] rounded-full'
          alt='adss'
          width={40}
          height={40}
          />
          <div className='flex justify-center h-full w-[70%] flex-col' >
            <div className='font-bold text-[12px]'>{item.name}</div>
            <div className='text-[10px] dark:text-[#D463F9]'>{item.nick}</div>
          </div>
         <div className='flex justify-end text-xs dark:text-[#D463F9] text-[#616161] w-[30%]'>
          <span>
          0.5250 ETH

          </span>
         </div>
      </div>
  ))
}
    </div>
    </>
  )
}

export default History