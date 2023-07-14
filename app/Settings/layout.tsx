"use client"
import React from 'react'
import {useRouter} from "next/navigation"
import {BiUser,BiBell,BiBrush} from "react-icons/bi"
const SettingsLayout = ({children}:{children:React.ReactNode}) => {
 const router = useRouter()

  return (
    <div className='flex flex-row  gap-4 h-full w-full '>

        <div className='flex p-4 flex-col gap-2 dark:bg-black bg-white rounded-md h-full w-[20vw]' >
          <button onClick={()=>router.push("/Settings")
        } className=' flex flex-row items-center p-2 gap-2 h-10 w-full dark:bg-white border-2
         border-[#901BB7] text-[#901BB7] focus:text-white focus:bg-[#901BB7] dark:focus:bg-[#901BB7] rounded-lg' >
            <BiUser  size={20}/>
            <p>Account</p>
          </button>
          <button onClick={()=>router.push("/Settings/Notifications")
        } className=' flex flex-row items-center p-2 gap-2 h-10 w-full dark:bg-white border-2
         border-[#901BB7] text-[#901BB7] focus:text-white focus:bg-[#901BB7] dark:focus:bg-[#901BB7] rounded-lg'>
            <BiBell  size={20}/>
            <p>Notifications</p>
            </button>
          <button onClick={()=>router.push("/Settings/Preferences")
        } className=' flex flex-row items-center p-2 gap-2 h-10 w-full dark:bg-white border-2
           border-[#901BB7] text-[#901BB7] focus:text-white focus:bg-[#901BB7] dark:focus:bg-[#901BB7] rounded-lg'>
            <BiBrush size={20}/>
            <p>Preferences</p>
          </button>
          
        </div>
        <div className='h-full w-[58vw] p-4 bg-white rounded-md dark:bg-black'>
        {children}
        </div>
    </div>
  )
}

export default SettingsLayout