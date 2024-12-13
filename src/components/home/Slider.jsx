import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import {sliderImages} from '../../utils/Helper'


const Slider = () => {
    return (
        <div className="py-20 relative flex justify-center items-center">
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
                {sliderImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="max-w-full"
                            src={image}
                            alt={`slider-image-${index}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;