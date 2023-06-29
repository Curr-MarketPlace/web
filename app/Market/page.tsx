import React from 'react'
import Button from "./Button"
import MarketItem from "./MarketItem"
const page = () => {
  return (
    <div className='flex flex-col gap-3 h-full w-full items-start p-2'>
    <Button/>
    <div className='flex flex-wrap gap-9 mb-[12%] h-full w-full overflow-y-auto '>
        <MarketItem/>
       </div>
    </div>
  )
}

export default page