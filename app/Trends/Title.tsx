import React from 'react'
type Titleprop = {
  title:string
  };
const Title: React.FC<Titleprop> = ({title}) => {
  return (
    <div className='flex items-center justify-between w-full h-[64px]'>
    <span className='font-semibold text-base text-black cursor-default dark:text-white'>{title}</span>
    <div className='flex cursor-pointer flex-row gap-4 dark:text-[#D463F9]'>
    
    See all

    </div>

</div>
  )
}

export default Title