import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const arr = [
  { title: "My Portfolio" },
  { title: "Wallet" },
  { title: "Favourites" },
  { title: "History" },
  { title: "Settings" },
];
const Topbar = ({setDisplay}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col  gap-4 items-start p-0 w-full h-auto" >
      {arr.map((i,index) => (
        <div key={index}
        
        onClick={()=>{
          router.push(`/${i.title}`)
          setDisplay.set(false)
        }}
         className="flex flex-row  w-full justify-start gap-4 pl-8 cursor-pointer
         
         " >
          <Image src={"/vector.png"} alt="asd" width={20} height={20} />
          <div className="text-style !text-sm font-semibold
            bg-gradient-to-l hover:from-purple-600  hover:to-indigo-700  dark:hover:from-pinkGrad-100  dark:hover:bg-gradient-to-l dark:hover:to-pinkGrad-100 
          
          ">{i.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Topbar;
