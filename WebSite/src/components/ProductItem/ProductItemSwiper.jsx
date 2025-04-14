import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ProductItemSwiper({ images }) {
    const swiperRef = useRef(null);

    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: Math.random() * 3000 + 1500, 
                disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            pagination={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {images?.map((item, index) => (
                <SwiperSlide
                    key={index}
                    className="aspect-square border-b-[1px] border-[#CF2516] flex items-center justify-center"
                >
                    <img
                        className="w-full h-full object-cover rounded-t-[10px]"
                        src={item}
                        alt="Product Image"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ProductItemSwiper;