import React from 'react'

const Button = () => {
  return (
    <div className='flex  gap-2'>
        <button className="btn !rounded-lg !bg-white ">All</button>
           <button className="btn !rounded-lg !bg-white">Art</button>
           <button className="btn !rounded-lg !bg-white">Gaming</button>
           <button className="btn !rounded-lg !bg-white">Photography</button>
           <button className="btn !rounded-lg !bg-white">Music</button>
    </div>
  )
}

export default Button