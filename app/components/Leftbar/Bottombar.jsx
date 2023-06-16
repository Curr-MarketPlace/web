import Image from 'next/image'
import React from 'react'
const arr2 =[
    {title:"My Portfolio"},
    {title:"Wallet"},
    {title:"Favourites"},
    {title:"History"},
    {title:"Settings"},
  ]
const Bottombar = () => {

    const textStyle = {
        background: 'linear-gradient(105.26deg, #3E06D6 0%, #901BB7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      };

  return (
    <div className='flex flex-col gap-4 items-start p-0 w-full h-auto'>
    {
      arr2.map((i)=>(
        <div className='flex flex-row w-full justify-start gap-4 pl-8'>
    <Image
           src={"/vector.png"}
           alt='asd'
           width={20}
           height={20}
           />
           <div className='text-style !text-base font-semibold ' >{i.title}</div>
    </div>
    
      ))
    }
                </div>
  )
}

export default Bottombar