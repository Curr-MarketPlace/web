import Image from "next/image";
import React,{useState} from "react";
import { useRouter } from "next/navigation";
import { FaReact } from "react-icons/fa";
import Link from "next/link";



const arr2 = [
  { title: "Home" },
  { title: "Market" },
  { title: "Trends" },
  { title: "Collections" },
];


const Bottombar = ({setDisplay}) => {

  const style = { color: "#3E06D6", fontSize: "1.2em" };
  const router = useRouter();
   const [url, setUrl] = useState("/")
  return (
    <div className="flex flex-col gap-4 items-start p-0 w-full h-auto ">
      {arr2.map((i, index) => (
    
        <div
          key={index}
          onClick={() =>{ 
             if (i.title==="Home") {
              setUrl("/")
             }else{
              setUrl(i.title)
             }
           router.push(`/${url}`)
            setDisplay.set(true)
        }}
          className="flex flex-row w-full justify-start gap-4 pl-8 cursor-pointer"
        >
          {/* <FaReact width={20} height={20} style={style}  /> */}
          <Image src={"/vector.png"} alt="asd" width={20} height={20} />

          <div className="textStyle ">
            {i.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bottombar;
