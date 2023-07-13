import React from "react";
import Colortheme from "./Colortheme"
import DarkModeButton from "./DarkModeButton"
// const handleTheme=()=>{
//   localStorage.setItem("theme","Dark" as any) as any
//   const value = localStorage.getItem("theme" || "") as any
//   console.log(value);
  
//  }


const page = () => {

  return (
      <div className=" flex flex-row justify-between items-center p-2 gap-2 h-10  w-[15vw] border-2 border-[#901BB7] text-[#901BB7]  rounded-lg">
        <p>Account</p>
        {/* <Colortheme/> */}
        <DarkModeButton/>
      </div>
      
  );
};

export default page;
