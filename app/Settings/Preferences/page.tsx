import React from 'react'
import DarkModeButton from './DarkModeButton'
// const handleTheme=()=>{
//   localStorage.setItem("theme","Dark" as any) as any
//   const value = localStorage.getItem("theme" || "") as any
//   console.log(value);

//  }

const page = () => {
  return (
    <div className=' flex flex-row justify-between items-center p-2 gap-2 h-10 w-[35vw]  md:w-[15vw] border-2 dark:bg-white border-[#901BB7] text-[#901BB7]  rounded-lg'>
      <p>Color Theme</p>
      {/* <Colortheme/> */}
      <DarkModeButton />
    </div>
  )
}

export default page
