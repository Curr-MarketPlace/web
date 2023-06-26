import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa";
import Topcreator from "./Topcreator";
import Featuredcreators from "./Featuredcreators";
import History from "./History";
const index = () => {
  const style = { color: "#3E0AD4", fontSize: "1.5em" };

  return (
    <div className="bg-[#F9F6FE] overflow-y-auto gap-1 h-[100%] w-[25%] flex flex-col items-center  ">
      <div className="w-full min-h-[12%] flex justify-end items-center gap-8 pr-6">
        <div
          className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden
        rounded-full  border-2 border-purple-500 hover:border-4 hover:border-purple-500"
        >
          <FaBell className="text-2xl hover:text-xl" color="#3E0AD4" />
        </div>
        <div
          className="relative inline-flex items-center justify-center w-11 h-11 overflow-hidden
       bg-gray-100 rounded-full  border-2 border-purple-500 hover:border-4 hover:border-purple-500"
        >
          <Image src={"/unnamed.jpg"} alt="asd" className="rounded-full object-cover" width={38} height={38} />
        </div>
      </div>
      
      <Topcreator/>
      <Featuredcreators/>
      <History/>
     

    </div>
  );
};

export default index;
