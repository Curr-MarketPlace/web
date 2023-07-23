import React from 'react'
type HeadProps = {
 title:String
 mb?:String
};

const Header:React.FC<HeadProps> = ({title,mb}) => {
  return (
    <div className={`flex justify-between items-center mb-4 w-[90%] h-6`}>
    <span className='font-bold text-base'>{title}</span>
    <span className='text-xs dark:text-[#D463F9] text-[#616161] cursor-pointer hidden md:flex'>See All</span>
  </div>
  )
}

export default Header