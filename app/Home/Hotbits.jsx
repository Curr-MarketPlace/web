import Image from 'next/image'
import React from 'react'
import {FaEthereum} from "react-icons/fa"

const Hotbits = () => {
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
    <div className='flex flex-row gap-6  w-full overflow-hidden h-[50%] overflow-x-auto'>
     {arr.map((item,i)=>(
        <div key={i} className='flex flex-col gap-2 min-w-[25%] h-full p-3'>
        <div className='w-auto h-auto mb-1'>
         <Image
         src={item.image}
         alt='asd'
         height={500}
         width={500}
         />
         </div>
         <div className='text-item1 flex justify-between items-center'>
           <span className='text-xs font-semibold'>Ape Loves</span>
           <span className='text-[#616161] text-xs font-medium'>12.2k fav</span>
         </div>
         <div className='text-item2 flex justify-start items-center'>
           <span className='text-[#616161] text-[10px] font-medium'>@Joker</span>
         </div>
         <div className='text-item1 flex justify-between items-center'>
           <span className='text-xs font-medium'>Ape Loves</span>
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

export default Hotbits