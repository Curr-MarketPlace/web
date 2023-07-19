import {BiCart,BiHomeAlt,BiTrendingUp,BiCollection} from "react-icons/bi"
const BottomBar = () => {
  return (
    <div className='flex w-full h-[9vh] md:hidden 
     bg-purple-600 bg-gradient-to-l  from-purple-600  to-indigo-700'>

<div className='flex items-center justify-between w-full py-2 px-10 '>
  
<div className="flex flex-col items-center justify-center gap-1 h-auto text-[12px] w-auto text-white ">
<BiHomeAlt   size={30}/>

Home
</div>
<div className="flex flex-col items-center justify-center gap-1 h-auto text-[12px] w-auto text-white ">
<BiCart   size={30}/>

Home
</div>
<div className="flex flex-col items-center justify-center gap-1 h-auto text-[12px] w-auto text-white ">
<BiTrendingUp   size={30}/>

Home
</div>
<div className="flex flex-col items-center justify-center gap-1 h-auto text-[12px] w-auto text-white ">
<BiCollection   size={30}/>

Home
</div>

</div>

     </div>
  )
}

export default BottomBar