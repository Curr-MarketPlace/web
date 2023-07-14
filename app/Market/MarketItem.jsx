import Image from "next/image";
import React from "react";
import {HiOutlineHeart} from "react-icons/hi";
import {FaEthereum} from "react-icons/fa"
const MarketItem = () => {
  const arr = [
    {
      img: "/Market.png",
    },
    {
      img: "/Market.png",
    },
    {
      img: "/Market.png",
    },
    {
      img: "/Market.png",
    },
    {
      img: "/Market.png",
    },
    {
      img: "/Market.png",
    },
    {
      img: "/Market.png",
    },
    {
      img: "/Market.png",
    },
    {
      img: "/Market.png",
    },
  ];
  return (
    <>
      {arr.map((items,i) => (
        <div key={i} className=" flex flex-col items-start rounded-2xl gap-2  p-3 justify-start w-[220px] h-[300px] dark:bg-black bg-white">
          <div className="flex justify-end  h-auto w-auto relative">
            <button className="flex items-center justify-center absolute rounded-full h-7 w-7 m-2 bg-white">
              <HiOutlineHeart
              color="#616161"
              size={20}
              /> 
            </button>
            <Image src={"/Market.png"} alt="market" width={196} height={201} className="border border-[#D463F9] rounded-xl" />
          </div>
           
          <div className='text-item1 w-full flex justify-between items-center'>
           <span className='text-xs font-semibold'>Ape Loves</span>
           <span className='text-[#616161] text-xs font-medium dark:text-[#D463F9]'>12.2k fav</span>
         </div>
         <div className='text-item2 flex justify-start items-center'>
           <span className='text-[#616161] text-[10px] font-medium dark:text-[#D463F9]'>@Joker</span>
         </div>
         <div className='text-item1 w-full flex justify-between items-center'>
           <span className='text-xs font-medium'>Current bid</span>
           <span className='font-medium text-xs flex items-center'>
               <FaEthereum/>
            9.1 ETH
         </span>
         </div>

        </div>
      ))}
    </>
  );
};

export default MarketItem;
