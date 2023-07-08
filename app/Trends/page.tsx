import React from 'react'
import TopCollector from "./TopCollector"
import Title from "./Title"
const page = () => {
  return (
    <div className=' h-[100%] overflow-y-auto ' >
          <Title
          title="Trending Auctions"
          />

        <TopCollector/>

        <Title
          title="Most Viewed"
          />

        <TopCollector/>

        <Title
          title="Trending Auctions"
          />
          
        <TopCollector/>
    </div>
  )
}

export default page