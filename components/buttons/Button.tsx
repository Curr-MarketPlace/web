import React from 'react'
import { IconType } from 'react-icons'
type ButtonProps = {
  // onSubmit: (e:React.MouseEvent<HTMLButtonElement>)=> void
  btnLabel?: string
  rounded?: string
  size?: string
  icon?: IconType
  mainButton?: boolean
  // outLine?: boolean;
  // icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  // onSubmit,
  btnLabel,
  rounded,
  size,
  icon: Icon,
  mainButton
  // outLine,
  // icon:Icon
}) => {
  return (
    <button
      className={`flex gap-2 items-center hover:opacity-90 text-white  
      dark:from-pinkGrad-100  dark:bg-gradient-to-l dark:to-pinkGrad-100 
      bg-gradient-to-l  from-purple-600  to-indigo-700
       ${rounded} ${
        mainButton ? `py-2 px-6 text-base` : `py-1 px-4 text-sm`
      } my-6 `}
    >
      {Icon && <Icon size={15} />}

      {btnLabel}
    </button>
  )
}

export default Button
