import Link from 'next/link'
import { BiCart, BiHomeAlt, BiTrendingUp, BiCollection } from 'react-icons/bi'
const BottomBar = () => {
  return (
    <div
      className='flex w-full h-auto  md:hidden 
     bg-purple-600 bg-gradient-to-l  from-purple-600  to-indigo-700'
    >
      <div className='flex items-center justify-between w-full py-2 px-10 '>
        <Link
          href={'/'}
          className='flex flex-col items-center justify-center gap-1 h-auto text-[12px] w-auto text-white '
        >
          <BiHomeAlt size={30} />
          Home
        </Link>
        <Link
          href={'/Market'}
          className='flex flex-col items-center justify-center gap-1 h-auto text-[12px] w-auto text-white '
        >
          <BiCart size={30} />
          Market
        </Link>
        <Link
          href={'/Trends'}
          className='flex flex-col items-center justify-center gap-1 h-auto text-[12px] w-auto text-white '
        >
          <BiTrendingUp size={30} />
          Trends
        </Link>
        <Link
          href={'/Collections'}
          className='flex flex-col items-center justify-center gap-1 h-auto text-[12px] w-auto text-white '
        >
          <BiCollection size={30} />
          Collections
        </Link>
      </div>
    </div>
  )
}

export default BottomBar
