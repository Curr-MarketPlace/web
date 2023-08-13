'use client'
import React, { useState, useEffect } from 'react'
import ButtonGroup from './ButtonGroup'
import MarketItem from './MarketItem'
import Topcreator from '@/components/rightbar/Topcreator'
import Featuredcreators from '@/components/rightbar/Featuredcreators'
import History from '@/components/rightbar/History'
import Rightbar from '@/components/rightbar/Rightbar'

const page = () => {
  const arr = [
    {
      img: '/Market.png',
      num: '1'
    },
    {
      img: '/Market.png',
      num: '2'
    },
    {
      img: '/Market.png',
      num: '3'
    },
    {
      img: '/Market.png',
      num: '4'
    },
    {
      img: '/Market.png',
      num: '5'
    },
    {
      img: '/Market.png',
      num: '6'
    },
    {
      img: '/Market.png',
      num: '7'
    },
    {
      img: '/Market.png',
      num: '8'
    },
    {
      img: '/Market.png',
      num: '9'
    },
    {
      img: '/Market.png',
      num: '10'
    },
    {
      img: '/Market.png',
      num: '11'
    },
    {
      img: '/Market.png',
      num: '12'
    },
    {
      img: '/Market.png',
      num: '13'
    },
    {
      img: '/Market.png',
      num: '14'
    },
    {
      img: '/Market.png',
      num: '15'
    },
    {
      img: '/Market.png',
      num: '16'
    },
    {
      img: '/Market.png',
      num: '17'
    },
    {
      img: '/Market.png',
      num: '18'
    },
    {
      img: '/Market.png',
      num: '19'
    },
    {
      img: '/Market.png',
      num: '20'
    },
    {
      img: '/Market.png',
      num: '21'
    },
    {
      img: '/Market.png',
      num: '22'
    },
    {
      img: '/Market.png',
      num: '23'
    },
    {
      img: '/Market.png',
      num: '24'
    },
    {
      img: '/Market.png',
      num: '25'
    }
  ]
  const [firstArr, setFirstArr] = useState([])
  const [secondArr, setSecondArr] = useState([])
  const [thirdArr, setThirdArr] = useState([])
  const [allArr, setAllArr] = useState([])

  useEffect(() => {
    const Arr = arr.slice(0, 4)
    const Arr2 = arr.slice(4, 8)
    const Arr3 = arr.slice(8, 12)
    const Arr4 = arr.slice(12)
    setFirstArr(Arr as any)
    setSecondArr(Arr2 as any)
    setThirdArr(Arr3 as any)
    setAllArr(Arr4 as any)
  }, [])

  return (
    <div className='flex flex-row h-full w-full p-5 md:p-0 '>
      <div className='flex flex-col gap-3 h-full w-[100vw] md:w-full items-start  overflow-y-auto  '>
        <ButtonGroup />

        <div className='flex md:hidden flex-col  h-full w-full gap-6 overflow-y-auto '>
          <MarketItem arrItem={firstArr} />
          <div className='flex md:hidden flex-col md:pt-5'>
            <Topcreator />
          </div>
          <MarketItem arrItem={secondArr} />

          <div className='flex md:hidden flex-col md:pt-5'>
            <Featuredcreators />
          </div>

          <MarketItem arrItem={thirdArr} />

          <div className='flex md:hidden flex-col md:pt-5'>
            <History />
          </div>

          <MarketItem arrItem={allArr} />
        </div>

        <div className='hidden md:flex flex-col  h-full w-full gap-6 overflow-y-auto '>
          <MarketItem arrItem={allArr} />
        </div>
      </div>
      <Rightbar />
    </div>
  )
}

export default page
