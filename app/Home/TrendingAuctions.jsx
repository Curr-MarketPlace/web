import Image from 'next/image'
import React from 'react'
import {FaEthereum} from "react-icons/fa"

const TrendingAuctions = () => {
    const arr=[
        {
            image:"/Trending.png",
            name:"OsmanBey",
            balance:"5000"
        }, {
            image:"/Trending2.png",
            name:"NorasTech",
            balance:"3400.5"
        }, {
            image:"/Trending3.png",
            name:"Atesh",
            balance:"2250.25"
        },
        {
            image:"/Trending4.png",
            name:"Rapid NFT",
            balance:"1235.2"
        }, {
            image:"/Trending.png",
            name:"Melih",
            balance:"5250"
        }, {
            image:"/Trending2.png",
            name:"Kaan",
            balance:"2555"
        },
    ]
  return (
    <div className='flex flex-row gap-6  w-full overflow-hidden h-auto overflow-x-auto'>
     {arr.map((item,index)=>(
        <div key={index} className='flex flex-col gap-2 min-w-[25%] h-full  p-3'>
        <div className='flex items-center justify-center relative w-auto h-auto mb-1'>
            <div className='flex flex-col items-center justify-center text-white absolute gap-2 opacity-100'>
            <span className='font-semibold text-xl'>
               {item.name}
                </span>
                <span className='font-medium text-xs'>
                {item.balance} ETH
                </span>
         </div>

         <Image
         src={item.image}
         alt='asd'
         height={200}
         width={200}
         />
         </div>
       
         
    </div>
     ))}
    </div>
  )
}


export default TrendingAuctions