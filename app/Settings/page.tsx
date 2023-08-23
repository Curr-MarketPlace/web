import React from 'react'
import ButtonGroup from './Components/ButtonGroup'
import Account from './Account/page'
const page = () => {
  return (
    <>
      <div className='hidden md:flex h-full w-full'>
        <Account />
      </div>
      <div className='flex md:hidden w-full h-full'>
        <ButtonGroup />
      </div>
    </>
  )
}

export default page
