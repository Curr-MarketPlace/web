import React from 'react'
import Rightbar from '@/components/rightbar/Rightbar'

const page = () => {
  return (
    <>
      <div className='flex flex-row h-full w-full'>
        <div className='w-full h-full'>Children</div>
        <Rightbar />
      </div>
    </>
  )
}

export default page
