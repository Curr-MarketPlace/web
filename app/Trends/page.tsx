import React from 'react'
import TopCollector from './TopCollector'
import Title from './Title'
import Rightbar from '@/components/rightbar/Rightbar'
import Topcreator from '@/components/rightbar/Topcreator'
import Featuredcreators from '@/components/rightbar/Featuredcreators'
import History from '@/components/rightbar/History'

const page = () => {
  return (
    <div className='flex flex-row h-full w-full md:px-0 px-5'>
      <div className=' h-full w-full  overflow-x-hidden'>
        <span className='text-2xl font-semibold flex md:hidden text-black dark:text-white'>
          Trends
        </span>
        <Title title='Trending Auctions' />

        <TopCollector />
        <div className='flex md:hidden flex-col pt-5'>
          <Topcreator />
        </div>
        <Title title='Most Viewed' />

        <TopCollector />
        <div className='flex md:hidden flex-col pt-5'>
          <Featuredcreators />
        </div>
        <Title title='Trending Auctions' />

        <TopCollector />
        <div className='flex md:hidden flex-col pt-5'>
          <History />
        </div>
      </div>
      <Rightbar />
    </div>
  )
}

export default page
