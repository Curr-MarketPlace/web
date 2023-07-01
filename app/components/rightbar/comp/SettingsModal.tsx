import React from 'react'
import { IconType } from "react-icons";
import {TbLogout} from "react-icons/tb"

type ButtonProps = {
   visible: Boolean
   onClose:()=>void
  };
  
const handleClick=()=>{
  console.log("calisti");
}
const SettingsModal:React.FC<ButtonProps> = ({visible,onClose}) => {

  if(!visible){
    return null
  }
  return (
    <div className=" flex flex-col p-2 absolute inset-0 left-2/3 top-20 z-1 h-[25%] w-[32%] rounded-lg gap-4 text-white bg-blue-600">
    <button onClick={onClose} className='flex justify-end pr-2'>X</button>
    
    <ul className="flex flex-col gap-6 cursor-pointer">
    <li onClick={()=>handleClick()} className="relative">
      Connect Wallet

    {/* */}

      <div className="h-0.5  bg-white absolute bottom-0 left-0 right-0"></div>
    </li>
    <li className="relative">
      Profile
      <div className="h-0.5 bg-white absolute bottom-0 left-0 right-0"></div>
    </li>
    <li className=" flex relative flex-col ">
      <div className='flex flex-row justify-between items-center'>
      Logout
      <TbLogout size={20}/>
      </div>

      <div className="h-0.5 bg-white absolute bottom-0 left-0 right-0"></div>

    </li>
  </ul>
      
   </div>
  )
}

export default SettingsModal