import Image from 'next/image'
import React from 'react'
import { DiReact } from 'react-icons/di';
const arr2 =[
    {title:"My Portfolio"},
    {title:"Wallet"},
    {title:"Favourites"},
    {title:"History"},
    {title:"Settings"},
  ]
const Bottombar = () => {
  const style = { color: "purple", fontSize: "1.5em" }


  return (
    <div className='flex flex-col gap-4 items-start p-0 w-full h-auto'>
    {
      arr2.map((i)=>(
        <div className='flex flex-row w-full justify-start gap-4 pl-8'>
     
            <Image src={"/vector.png"} alt="asd" width={20} height={20} />
   
           <div className='text-style !text-sm font-semibold ' >{i.title}</div>
    </div>
    
      ))
    }
                </div>
  )
}

export default Bottombar