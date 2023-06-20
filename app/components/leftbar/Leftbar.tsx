"use client";
import Image from "next/image";
import React from "react";
import Profileitems from "./Profileitems";
import Mainitems from "./Mainitems";
import Button from "../buttons/Button";
// import Baritemstop from "@/components/Baritemstop"
const arr = [
  { title: "Home" },
  { title: "Market" },
  { title: "Trends" },
  { title: "Collections" },
];
const arr2 = [
  { title: "My Portfolio" },
  { title: "Wallet" },
  { title: "Favourites" },
  { title: "History" },
  { title: "Settings" },
];
const LeftBar = () => {
  const textStyle = {
    background: "linear-gradient(105.26deg, #3E06D6 0%, #901BB7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  };

  return (
    <div className=" h-screen w-[18%] flex flex-col items-start ">
      <div
        style={textStyle}
        
        className=" mt-8 gap-5  font-extrabold lg:text-lg w-full flex items-center justify-center"
      >
        <Image src={"/vector.png"} alt="asd" width={35} height={35} />
        Curr Marketplace
      </div>

      <div className="flex flex-col items-center p-0 mt-14 gap-5 w-full h-auto">
        <Profileitems />

        <div className="font-bold text-xl w-10/12">Profile</div>

        <Mainitems />
       
      </div>
      <div className=" flex items-end justify-center w-full h-full">
      <Button 
      rounded="rounded-3xl"
      btnLabel="Log Logout"
      />
      </div>
    </div>
  );
};

export default LeftBar;
