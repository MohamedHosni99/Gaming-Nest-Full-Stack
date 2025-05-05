"use client"

import Image from "next/image"
import React, { ReactNode, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { Autoplay } from "swiper/modules";
import type SwiperType from "swiper";

const SwiperCards = (
  { 
    items, 
    paginationImages,
    className,
    slidesPerView 
  } : { 
    items:{src?:string, card:ReactNode}[]
    , 
    paginationImages?: boolean,
    className?: string,
    slidesPerView?: number  
  }) => {
  
  const [swiper,setSwiper] = useState<SwiperType | null>();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress((prev) => ( prev >= 100 ? 100 : prev + 3.7 ));
    },110);
    return () => clearInterval(t);
  },[progress]);
  
  useEffect(() => {
      swiper?.on('slideChange', () => {
        setProgress(0);
      });
    }
  ,[swiper]);
  return (
    <div className='flex flex-col gap-4'>
        <Swiper
          autoplay={{delay: 3000}}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={slidesPerView || 1} className={`w-full ${className || 'h-90'}`}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => setSwiper(swiper)}
  >
        {items.map(({card},i) => (
            <SwiperSlide key={i} >{card}</SwiperSlide>
        ))}
    </Swiper>
        
        <div className="flex items-center gap-4">
            {paginationImages && items.map(({src},i) => (
                <div 
                  onClick={() => {
                    swiper?.slideTo(i)
                    swiper?.autoplay.stop()
                  }}
                  key={i} 
                  className= {`cursor-pointer z-10 relative hover:-translate-y-5 hover:opacity-90 duration-200 rounded-xl overflow-hidden hover:shadow-md w-full h-40`}>
                  { swiper?.realIndex == i && (
                    <div 
                      style={{width: `${progress}%`}} 
                      className=" duration-200 opacity-50 absolute w-0 h-full inset-0 bg-gray-600 z-10">
                      </div>)}
                  {src && src !== "" ? <Image alt="Image-pagination" src={src} fill className="object-cover" /> : null}{" "}
                </div>
            ))}
        </div>
    </div>
  )
}

export default SwiperCards