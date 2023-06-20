import React from 'react'
import { IconType } from 'react-icons';
type ButtonProps={
  // onSubmit: (e:React.MouseEvent<HTMLButtonElement>)=> void
  btnLabel: string;
  rounded:string
  // outLine?: boolean; 
  // icon?: IconType
  }

const Button :React.FC<ButtonProps> = ({
  // onSubmit,
  btnLabel,
  rounded,
  // outLine,
  // icon:Icon
}) => {
  return (
    <button className={` bg-blue-600 hover:opacity-90 text-white text-xs ${rounded} w-[112px] h-[40px] my-6 bg-gradient-to-r from-[#3E06D6] from-60% to-[#901BB7] to-100%`}>{btnLabel}</button>
  )
}

export default Button