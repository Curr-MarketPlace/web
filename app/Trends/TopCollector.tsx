import Image from 'next/image'
import React from 'react'
import {FaEthereum} from "react-icons/fa"
import {HiOutlineHeart} from "react-icons/hi";

const TopCollector = () => {
    const arr=[
        {
            image:"/Apeloves.png",
        }, {
            image:"/Apeloves2.png",
        }, {
            image:"/Apeloves3.png",
        },
        {
            image:"/Apeloves.png",
        }, {
            image:"/Apeloves2.png",
        }, {
            image:"/Apeloves3.png",
        },
    ]
  return (
    <div className='flex flex-row gap-6  w-full overflow-x-auto '>
    {arr.map((item,i)=>(
       <div key={i} className='flex flex-col gap-2 min-w-[50vw] md:min-w-[15vw] h-min min-h-[90%] dark:bg-black bg-white rounded-2xl p-3'>
       <div className="flex justify-end mb-1 h-auto w-auto relative">
           <button className="flex items-center justify-center absolute rounded-full h-7 w-7 m-2 bg-white">
             <HiOutlineHeart
             color="#616161"
             size={20}
             /> 
           </button>
           <Image src={item.image} alt="market" width={300} height={300} className='border dark:border-[#D463F9] rounded-xl' />
         </div>
        
        <div className='text-item1 flex justify-between  items-center'>
          <span className=' text-base md:text-sm font-semibold'>Ape Loves</span>
          <span className='text-[#616161] dark:text-[#D463F9] text-sm md:text-xs font-medium'>12.2k fav</span>
        </div>
        <div className='text-item2 flex justify-start items-center'>
          <span className='text-[#616161] dark:text-[#D463F9]  text-sm md:text-xs font-medium'>@Joker</span>
        </div>
        <div className='text-item1  flex justify-between items-center'>
          <span className=' text-sm md:text-xs font-normal'>Current Bid</span>
          <span className='font-medium text-xs flex items-center'>
              <FaEthereum/>
           9.1 ETH
        </span>
        </div>
        
   </div>
    ))}
   </div>
  )
}

export default TopCollector