import Image from 'next/image'
import React from 'react'
import {BiDotsHorizontalRounded} from "react-icons/bi"
import {FaEthereum} from "react-icons/fa"
import Button from '../buttons/Button'
const Featuredcreators = () => {
  return (
<>
<div className='flex justify-between items-center w-[90%]  my-3 '>
      <span className='font-bold text-base'>Featured Creators</span>
      <span className='text-xs text-[#616161]'>See All</span>
    </div>

    <div className="min-h-[40%] w-[90%] flex flex-col rounded-2xl bg-white">
    <div className='flex my-3 gap-2 p-4  w-full items-center  h-[40px] '>
          <Image
          src={"/Ellipse2.png"}
          alt='adss'
          width={40}
          height={40}
          />
          <div className='flex justify-center h-full w-full flex-col ' >
            <div className='font-bold text-[12px]'>Melih Kaan</div>
            <div className='text-[10px]'>@melihkaanarc</div>
          </div>

          <BiDotsHorizontalRounded size={24} />
      </div>
      <div className='flex flex-row h-full w-auto gap-6 justify-center '>
      <div className='item-1 w-[42%] h-[95%] flex flex-col '>
      <Image
          src={"/FatihSultanMehmed.png"}
          alt='adss'
          unoptimized
          className='rounded-xl'
          width={140}
          height={180}
          />
          <div className='w-full h-[13%] font-bold text-sm flex items-end'>
              Melih Bey #1299
          </div>
          <div className='w-full h-[13%] text-xs text-[#616161] '>
            Ottoman NFT
          </div>
          <span className='font-medium text-sm flex items-center'>
                <FaEthereum/>
             9.1 ETH
          </span>
      </div>
      <div className='item-2 w-[42%] h-[95%] '>
      <Image
          src={"/FatihSultanMehmed.png"}
          alt='adss'
          unoptimized
          className='rounded-xl'
          width={140}
          height={180}
          />
          <div className='w-full h-[13%] font-bold text-sm flex items-end'>
              Melih Bey #1299
          </div>
          <div className='w-full h-[13%] text-xs text-[#616161] '>
            Ottoman NFT
          </div>
          <span className='font-medium text-sm flex items-center'>
                <FaEthereum/>
             9.1 ETH
          </span>
      </div>
      </div>
    </div>
    </>
  )
}

export default Featuredcreators