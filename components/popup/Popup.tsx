'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { drawerOff } from '../../app/redux/drawer/drawerSlice'
import { useDispatch } from 'react-redux'
const Popup = () => {
  const drawer = useSelector((state: any) => state.drawer.drawer)
  const dispatch = useDispatch()

  return (
    <div className='relative md:hidden'>
      <div
        className={`absolute z-10 opacity-0 h-[100vh] w-[100vw] bg-red-700 ${
          drawer ? 'translate-x-0' : ' -translate-x-full '
        } `}
        onClick={() => dispatch(drawerOff())}
      ></div>

      {/* İç içe geçmiş divlerin içerisine overlay eklenecek */}
      <div
        className={`top-0  w-[65vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300   ${
          drawer ? 'translate-x-0' : ' -translate-x-full '
        } `}
      >
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
  )
}

export default Popup

{
  /* <div className='relative'>
  <div className='absolute z-10 opacity-0 h-[100vh] w-[100vw] bg-red-700' onClick={()=>dispatch(drawerOff())}></div>

  <div className='relative'>
    <div onClick={()=>dispatch(drawerOff())} className='absolute bg-black h-14 w-full z-30'>
      bassss
    </div>
  </div>
</div> */
}
