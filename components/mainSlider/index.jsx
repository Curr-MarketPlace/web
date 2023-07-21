"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function ( index,className) {
  //     return' <div class="!h-10 !w-full !text-lg !rounded-full !gap-5 !bg-red-700 !flex !flex-row !items-center !justify-center">  </div>'
  //   },
  // };

// !border-2 !border-red-600 !h-4 !w-4 !bg-white hover:!bg-red-600

  // injectStyles2: [
  //   `
  //     .swiper-button-next,
  //     .swiper-button-prev {
  //       background-color: white;
  //       padding: 8px 16px;
  //       border-radius: 100%;
  //       border: 2px solid black;
  //       color: red;
  //     }
  //     .swiper-pagination-bullet{
  //       width: 40px;
  //       height: 40px;
  //       background-color: red;
  //     }
  // `
  // ]

  return (
  
      <Swiper
      slidesPerView={'auto'}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // pagination={pagination}
      pagination={{
        clickable: true,
       bulletClass: `swiper-pagination-bullet `
      }}  
        modules={[Autoplay,Pagination]}
        className="mySwiper w-full h-[30vh] md:h-[58vh] "
      >
        <SwiperSlide>
          <Image src={"/ad-card.png"} alt="card"   className="flex pb-[5vh] md:pb-[8vh]" fill={true}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/ad-card.png"} alt="card"   className="flex pb-[5vh] md:pb-[8vh]"  fill={true}/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={"/ad-card.png"} alt="card"  className="flex pb-[5vh] md:pb-[8vh]"   fill={true}/>

        </SwiperSlide>
      </Swiper>
  );
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
