import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ImageBaby() {
    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '800px',
              height: '700px',
              backgroundColor: '#fff',
              padding: '20px'
            }}>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#000000",
                    "--swiper-pagination-color": "#000000",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >

                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/1.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/2.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/3.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/4.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/5.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/6.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>   
                             
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
               <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/1.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/2.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/3.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/4.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/5.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="wrapper">
                        <div className="container">
                            <img src="/img/Baby/6.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>

    );
}