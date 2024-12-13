import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';


const Slider = () => {
    return (
        <div className="py-20 relative">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1, centeredSlides: false },
         
                }}
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
              
                }}
            >
                {/* Slides */}
                <SwiperSlide>
                    <img
                        className="max-w-full"
                        src="./assets/webp/slider-image.png"
                        alt="slider-image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="max-w-full"
                        src="./assets/webp/slider-image.png"
                        alt="slider-image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="max-w-full"
                        src="./assets/webp/slider-image.png"
                        alt="slider-image"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="max-w-full"
                        src="./assets/webp/slider-image.png"
                        alt="slider-image"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
