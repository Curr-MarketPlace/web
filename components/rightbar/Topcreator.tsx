'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Button from '../buttons/Button'
import Head from 'next/head'
import Header from './Header'
import { getTopCreator } from '@/data/action/userActions'
import { useState } from 'react'

const Topcreatorarr = [
  {
    name: 'Osmanbey',
    nick: '@osmankagan',
    img: '/Ellipse2.png'
  },
  {
    name: 'Joker',
    nick: '@melihkaanrac',
    img: '/Ellipse.png'
  },
  {
    name: 'Atesh',
    nick: '@tuncerbostan',
    img: '/Ellipse3.png'
  },
  {
    name: 'Rapid',
    nick: '@kursaderduhan',
    img: '/Ellipse4.png'
  },
  {
    name: 'NorasTech',
    nick: '@keremnoras',
    img: '/Ellipse5.png'
  }
]

const Topcreator = () => {
  const [Topcreatorarr, setTopcreatorarr] = useState([])

  useEffect(() => {
    const getCreaters = async () => {
      await getTopCreator(5).then((response: any) => {
        setTopcreatorarr(response)
        console.log('res', response)
      })
    }

    getCreaters()
  }, []) // Empty dependency array ensures that the effect runs only once after the initial render

  return (
    <>
      <Header title={'Topcreator'} />

      <div className='h-auto  md:h-auto md:w-[90%] gap-14 md:gap-3  px-4 pl-5 md:pl-5 md:p-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-clip md:rounded-2xl  md:dark:bg-black dark:bg-[#121212] bg-[#F9F6FE] md:bg-white'>
        {Topcreatorarr.length > 0 ? (
          <>
            {Topcreatorarr.map((item: any, index) => (
              <div
                key={index}
                className='flex md:flex-row flex-col min-w-[18vw] md:w-full items-center gap-4 md:h-[40px] md:justify-between '
              >
                <div className=' hidden md:flex relative h-12 w-14 rounded-full  border dark:border-[#D463F9]'>
                  <Image src={item.avatar} alt='' fill />
                </div>
                <div className=' flex md:hidden relative border dark:border-[#D463F9] rounded-full w-20 h-32'>
                  <Image src={item.avatar} alt='' fill />
                </div>

                <div className='flex justify-center items-center md:items-start h-auto w-[50%] flex-col '>
                  <div className=' font-bold   text-base md:text-sm'>
                    {item.username}
                  </div>
                  <div className=' text-sm md:text-xs dark:text-[#D463F9]'>
                    @ {item.username}
                  </div>
                </div>

                <div className='flex md:hidden w-auto h-auto'>
                  <Button btnLabel='Follow' rounded='rounded-md' mainButton />
                </div>
                <div className='hidden md:flex '>
                  <Button btnLabel='Follow' rounded='rounded-3xl' />
                </div>
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default Topcreator
