import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { FaReact } from "react-icons/fa";

const arr2 = [
  { title: "Home" },
  { title: "Market" },
  { title: "Trends" },
  { title: "Collections" },
];
const Bottombar = () => {
  const style = { color: "#3E06D6", fontSize: "1.2em" };
  const router = useRouter();
   
  return (
    <div className="flex flex-col gap-4 items-start p-0 w-full h-auto ">
      {arr2.map((items, index) => (
        <div
          key={index}
          onClick={() => router.push(`/${items.title}`)}
          className="flex flex-row w-full justify-start gap-4 pl-8 cursor-pointer"
        >
          {/* <FaReact width={20} height={20} style={style}  /> */}
          <Image src={"/vector.png"} alt="asd" width={20} height={20} />

          <div className="text-style !text-sm font-semibold ">
            {items.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bottombar;