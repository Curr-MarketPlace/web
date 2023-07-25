"use client"
import React from 'react'
import {BiUser,BiBell,BiBrush} from "react-icons/bi"
import {useRouter} from "next/navigation"

const ButtonGroup = () => {
    const router = useRouter()

  return (
    <div className='flex p-4 flex-col gap-2 dark:bg-black bg-white rounded-md h-[100vh] w-full md:w-[20vw]' >
    <button onClick={()=>router.push("/Settings/Account")
  } className=' flex flex-row items-center p-2 gap-2 h-12 w-full dark:bg-white border-2
   border-[#901BB7] text-[#901BB7] focus:text-white focus:bg-[#901BB7] dark:focus:bg-[#901BB7] rounded-lg' >
      <BiUser  size={20}/>
      <p>Account</p>
    </button>
    <button onClick={()=>router.push("/Settings/Notifications")
  } className=' flex flex-row items-center p-2 gap-2 h-12 w-full dark:bg-white border-2
   border-[#901BB7] text-[#901BB7] focus:text-white focus:bg-[#901BB7] dark:focus:bg-[#901BB7] rounded-lg'>
      <BiBell  size={20}/>
      <p>Notifications</p>
      </button>
    <button onClick={()=>router.push("/Settings/Preferences")
  } className=' flex flex-row items-center p-2 gap-2 h-12 w-full dark:bg-white border-2
     border-[#901BB7] text-[#901BB7] focus:text-white focus:bg-[#901BB7] dark:focus:bg-[#901BB7] rounded-lg'>
      <BiBrush size={20}/>
      <p>Preferences</p>
    </button> 
    
  </div>
  )
}

export default ButtonGroup