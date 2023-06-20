import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa";

const index = () => {
  const style = { color: "#3E0AD4", fontSize: "1.5em" };

  return (
    <div className="bg-blue-600 h-[100%] w-[25%] flex flex-col items-center  ">
      <div className="w-full h-[88px] bg-[#F9F6FE]  flex justify-end items-center gap-6 pr-6">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden
       bg-gray-100 rounded-full dark:bg-gray-200 border-2 border-purple-500 hover:border-4 hover:border-purple-500">
        <FaBell className="text-2xl hover:text-xl" color="#3E0AD4" />

        </div>
        <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden
       bg-gray-100 rounded-full dark:bg-gray-200 border-2 border-purple-500 hover:border-4 hover:border-purple-500">
                  <Image src={"/unnamed.jpg"} alt="asd" width={50} height={50} />


        </div>
        
      </div>
      <div className="h-[288px] w-[348px] bg-red-600"></div>
      <div className="h-[324px] w-[348px] bg-gray-600"></div>
    </div>
  );
};

export default index;
