import Image from 'next/image'
import React from 'react'

const Topcreator = () => {
  return (
    <div className="h-[288px] w-[348px] flex rounded-2xl bg-white">
        <div className='flex flex-row w-full h-[40px] mx-6 bg-black'>
            <Image 
            src={"/Ellipse.png"}
            alt='adss'
            width={40}
            height={40}
            />
        </div>
    </div>

  )
}

export default Topcreator