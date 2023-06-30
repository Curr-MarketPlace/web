import React from 'react'

type ButtonProps = {
   visible: Boolean
   onClose:()=>void
  };
  

const SettingsModal:React.FC<ButtonProps> = ({visible,onClose}) => {

  if(!visible){
    return null
  }
  return (
    <div className=" flex absolute inset-0 left-3/4 top-20 z-1 h-24 w-16 bg-slate-600">
    hello my modal
    <button onClick={onClose}>X</button>

   </div>
  )
}

export default SettingsModal