'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'

export default function App () {
  return (
    <Swiper
      slidesPerView={'auto'}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      // pagination={pagination}
      pagination={{
        clickable: true,
        bulletClass: `swiper-pagination-bullet `
      }}
      modules={[Autoplay, Pagination]}
      className='mySwiper w-full h-[25vh] md:h-[50vh] '
    >
      <SwiperSlide>
        <Image
          src={'/ad-card.png'}
          alt='card'
          className='flex pb-[5vh] md:pb-[8vh]'
          fill={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/ad-card.png'}
          alt='card'
          className='flex pb-[5vh] md:pb-[8vh]'
          fill={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={'/ad-card.png'}
          alt='card'
          className='flex pb-[5vh] md:pb-[8vh]'
          fill={true}
        />
      </SwiperSlide>
    </Swiper>
  )
}

{
  /* <SwiperSlide>
<Image
src={"/ad-card.png"}
alt='card'
width={9999}
height={9999}
/>
</SwiperSlide>
<SwiperSlide>
<Image
src={"/ad-card.png"}
alt='card'
width={9999}
height={9999}
/>
</SwiperSlide>
<SwiperSlide>
<Image
src={"/ad-card.png"}
alt='card'
width={9999}
height={9999}
/>
</SwiperSlide> */
}
