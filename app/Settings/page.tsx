import React from 'react'
import ButtonGroup from './Components/ButtonGroup'

const page = () => {
  return (
    <>
<div className='hidden md:flex'>
  account main page
</div>
    <div className='flex md:hidden w-full h-full'>
    <ButtonGroup/>
    </div>
    </>
  )
}

export default page