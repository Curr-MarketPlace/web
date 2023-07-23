"use client"
import React,{useState,useEffect} from 'react'
import Button from "./Button"
import MarketItem from "./MarketItem"
import Topcreator from '@/components/rightbar/Topcreator'
import Featuredcreators from '@/components/rightbar/Featuredcreators'
import History from '@/components/rightbar/History'
const page = () => {
  const arr = [
    {
      img: "/Market.png",
      num:"1"
    },
    {
      img: "/Market.png",
      num:"2"

    },
    {
      img: "/Market.png",
      num:"3"

    },
    {
      img: "/Market.png",
      num:"4"

    },
    {
      img: "/Market.png",
      num:"5"

    },
    {
      img: "/Market.png",
      num:"6"

    },
    {
      img: "/Market.png",
      num:"7"

    },
    {
      img: "/Market.png",
      num:"8"

    },
    {
      img: "/Market.png",
      num:"9"

    },
    {
      img: "/Market.png",
      num:"10"

    },
    {
      img: "/Market.png",
      num:"11"

    },
    {
      img: "/Market.png",
      num:"12"

    },
    {
      img: "/Market.png",
      num:"13"

    },
    {
      img: "/Market.png",
      num:"14"

    },
    {
      img: "/Market.png",
      num:"15"

    },
    {
      img: "/Market.png",
      num:"16"

    },{
      img: "/Market.png",
      num:"17"

    },
    {
      img: "/Market.png",
      num:"18"

    },
    {
      img: "/Market.png",
      num:"19"

    },
    {
      img: "/Market.png",
      num:"20"

    },
  ];
  const [firstArr, setFirstArr] = useState([])
  const [secondArr, setSecondArr] = useState([])
  const [thirdArr, setThirdArr] = useState([])

  useEffect(() => {
    const Arr = arr.slice(0,4);
    const Arr2 = arr.slice(4,8);
    const Arr3 = arr.slice(8,12);
    setFirstArr(Arr as any )
    setSecondArr(Arr2 as any)
    setThirdArr(Arr3 as any )
  }, [])  
  
  return ( 
    <div className='flex flex-col gap-3 h-full w-full items-start p-2 '>
    <Button/>
    <div className='flex flex-col  h-full w-full gap-6 overflow-y-auto '>
        <MarketItem arrItem={firstArr}/>
        <div className='flex md:hidden flex-col pt-5'>
        <Topcreator/>
        </div>
        <MarketItem arrItem={secondArr}/>

        <div className='flex md:hidden flex-col pt-5'>
        <Featuredcreators/>
        </div>

        <MarketItem arrItem={thirdArr}/>

        <div className='flex md:hidden flex-col pt-5'>
        <History/>
        </div>

       </div>
      
     
    </div>
  )
}

export default page