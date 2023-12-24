'use client'
import Topcreator from '@/components/rightbar/Topcreator'
import Hotbids from '../components/home/Hotbids'
import MainSlider from '../components/home/MainSlider'
import TrendingAuctions from '../components/home/TrendingAuctions'
import Featuredcreators from '@/components/rightbar/Featuredcreators'
import History from '@/components/rightbar/History'
import Rightbar from '@/components/rightbar/Rightbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getUsers } from '@/data/action/userActions'
const page = () => {
  const [user, setUser] = useState({})

  const getUser = async () => {
    const users = await getUsers()
      .then((res:any) => {
        console.log('uses', res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getUser()

  return (
    <div className='flex flex-row h-full w-full overflow-y-auto  '>
      <div className='md:max-w-[50vw] w-full h-full  overflow-y-auto py-4 '>
        <div className='px-5 md:px-0'>
          <MainSlider />
        </div>
        <div className='flex items-center justify-between w-full h-[64px] px-5 md:px-0 '>
          <span className='font-semibold text-base '>Hot bids</span>
          <div className='flex flex-row gap-4'>
            <button className='miniButtons dark:bg-[#121212] dark:text-white '>
              Art
            </button>
            <button className='miniButtons dark:bg-[#121212] dark:text-white'>
              Music
            </button>
            <button className='miniButtons dark:bg-[#121212] dark:text-white'>
              Utility
            </button>
          </div>
        </div>

        <Hotbids />

        <div className='flex items-center justify-between w-full h-[64px] px-5 md:px-0 '>
          <span className='font-semibold text-base '>Trending Auctions</span>
        </div>

        <TrendingAuctions />
        {/* responsive mobile right bar */}
        <div className='flex md:hidden flex-col pt-5'>
          <Topcreator />
        </div>
        <div className='flex md:hidden flex-col pt-5'>
          <Featuredcreators />
        </div>
        <div className='flex md:hidden flex-col pt-5'>
          <History />
        </div>
      </div>
      <Rightbar />
    </div>
  )
}

export default page
