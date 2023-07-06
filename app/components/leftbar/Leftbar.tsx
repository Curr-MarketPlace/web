"use client";
import Image from "next/image";
import React from "react";
import Profileitems from "./Profileitems";
import Mainitems from "./Mainitems";
import Button from "../buttons/Button";
import { FaReact } from "react-icons/fa";
import {useRouter} from "next/navigation"
import { useStorken } from "@/data/storken";
// import Baritemstop from "@/components/Baritemstop"

const LeftBar = () => {


  const textStyle = {
    background: "linear-gradient(105.26deg, #3E06D6 0%, #901BB7 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  };


  const [display, setDisplay] = useStorken<Boolean>("displayRightBar");

 const router = useRouter()
  return (
    <div className="bg-white h-screen w-[18%] flex flex-col items-start ">
      <div
      onClick={()=>router.push("/")}
        style={textStyle}
        className=" mt-8 gap-5  font-extrabold lg:text-lg w-full flex items-center justify-center cursor-pointer"
      >
        <Image src={"/vector.png"} alt="asd" width={35} height={35} />
        Curr Marketplace
      </div>

      <div className="flex flex-col items-center p-0 mt-14 gap-5 w-full h-auto">
        <Mainitems setDisplay={setDisplay} />

        <div className="font-bold text-xl w-10/12">Profile</div>
        <Profileitems setDisplay={setDisplay} />

      </div>
      <div className=" flex items-end justify-center w-full h-full">
        <Button
          rounded="rounded-3xl"
          btnLabel="Logout"
          mainButton
          size="lg"
          icon={FaReact}
        />
      </div>
    </div>
  );
};

export default LeftBar;
