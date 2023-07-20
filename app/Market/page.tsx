import React from 'react'
import Button from "./Button"
import MarketItem from "./MarketItem"
const page = () => {
  return ( 
    <div className='flex flex-col gap-3 h-full w-full items-start p-2'>
    <Button/>
    <div className='md:flex md:flex-wrap grid grid-cols-2 gap-6  md:gap-9 h-full w-full overflow-y-auto '>
        <MarketItem/>
       </div>
    </div>
  )
}

export default page