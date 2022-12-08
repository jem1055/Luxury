import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function ImageBabyOne() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
                    <div className="wrapper1">
                        <div className="container">
                            <img src="/img/Baby/1.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper1">
                        <div className="container">
                            <img src="/img/Baby/2.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper1">
                        <div className="container">
                            <img src="/img/Baby/3.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper1">
                        <div className="container">
                            <img src="/img/Baby/4.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper1">
                        <div className="container">
                            <img src="/img/Baby/5.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper1">
                        <div className="container">
                            <img src="/img/Baby/6.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>        
      </Swiper>
    </>
  );
}