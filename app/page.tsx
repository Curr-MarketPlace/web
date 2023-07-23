import Topcreator from '@/components/rightbar/Topcreator'
import Hotbids from '../components/Home/Hotbids'
import MainSlider from '../components/home/MainSlider'
import TrendingAuctions from '../components/home/TrendingAuctions'
const page = () => {
  return (  
    <div className=' h-full w-full overflow-y-auto  ' >
      <MainSlider/>
   
      <div className='flex items-center justify-between w-full h-[64px] '>
           <span className='font-semibold text-base '>Hot bids</span>
           <div className='flex flex-row gap-4'>
           
           <button className="miniButtons dark:bg-[#121212] dark:text-white ">Art</button>
           <button className="miniButtons dark:bg-[#121212] dark:text-white">Music</button>
           <button className="miniButtons dark:bg-[#121212] dark:text-white">Utility</button>

           </div> 

      </div>

      <Hotbids/>


      <div className='flex items-center justify-between w-full h-[64px]'>
           <span className='font-semibold text-base '>Trending Auctions</span>
      </div>

        <TrendingAuctions/>
       <div className='flex md:hidden flex-col pt-5'>
        <Topcreator/>
        </div>
        </div>
  )
}

export default page