"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { drawerOff } from '../../app/redux/drawer/drawerSlice'
import { useDispatch } from 'react-redux'
const Popup = () => {
const drawer = useSelector((state)=> state.drawer.drawer)
const dispatch = useDispatch()

if (drawer == false) {
  return null
  
}
  return (
<div className='relative md:hidden'>
  <div className='absolute z-10 opacity-0 h-[100vh] w-[100vw] bg-red-700' onClick={()=>dispatch(drawerOff())}></div>

  {/* İç içe geçmiş divlerin içerisine overlay eklenecek */}
  <div className='relative'>
    <div  className='absolute  z-30 mx-6 
    bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700
    '>
    <ul
            className='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownDefaultButton'
          >
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='/Settings'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Sign out
              </a>
            </li>
          </ul>
    </div>
  </div>
</div>


  )
}

export default Popup




{/* <div className='relative'>
  <div className='absolute z-10 opacity-0 h-[100vh] w-[100vw] bg-red-700' onClick={()=>dispatch(drawerOff())}></div>

  <div className='relative'>
    <div onClick={()=>dispatch(drawerOff())} className='absolute bg-black h-14 w-full z-30'>
      bassss
    </div>
  </div>
</div> */}