import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const arr = [
  { title: 'My Portfolio' },
  { title: 'Wallet' },
  { title: 'Favourites' },
  { title: 'History' },
  { title: 'Settings' }
]
const Topbar = () => {
  const router = useRouter()
  const [url, setUrl] = useState('')

  return (
    <div className='flex flex-col  gap-4 items-start p-0 w-full h-auto'>
      {arr.map((i, index) => (
        <div
          key={index}
          onClick={() => {
            if (i.title === 'My Portfolio') {
              setUrl('Profile')
            } else {
              setUrl(i.title)
            }
            router.push(`/${url}`)
          }}
          className='flex flex-row  w-full justify-start gap-4 pl-8 cursor-pointer'
        >
          <Image src={'/vector.png'} alt='asd' width={20} height={20} />
          <div className='text-[#616161] text-lg font-semibold md:textStyle '>
            {i.title}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Topbar
