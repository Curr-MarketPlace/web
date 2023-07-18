"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import Topcreator from "./Topcreator";
import Featuredcreators from "./Featuredcreators";
import History from "./History";
import SettingsModal from "./comp/SettingsModal"
import { useStorken } from "@/data/storken";

const index = () => {
  const [showMyModal, setshowMyModal] = useState(false)

      const handleOnClose = ()=> setshowMyModal(false)
      const [display, setDisplay] = useStorken<any>("displayRightBar");
if(!display){
  return null
}
  return (
    <div className=" min-h-[88%] overflow-y-auto min-w-[30%] hidden md:flex flex-col items-center  ">
    
      <div className=" w-full  h-full flex flex-col items-center ">
      <SettingsModal onClose={handleOnClose}  visible={showMyModal}/>
      <Topcreator/>
      <Featuredcreators/>
      <History/>
      <div className="flex h-50 w-11">

      </div>
      </div>
    </div>
  );
};

export default index;




