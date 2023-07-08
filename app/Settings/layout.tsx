"use client"
import React from 'react'
import RightBar from '@/components/rightbar/Rightbar'
import {useRouter} from "next/navigation"

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
 const router = useRouter()

  return (
    <div className='flex flex-row items-end justify-end h-full w-full bg-blue-400'>

        <div className='bg-red-600 h-10 w-10' onClick={()=>router.push("/Settings/Testtt")
        }></div>
        {children}

    </div>
  )
}

export default SettingsLayout