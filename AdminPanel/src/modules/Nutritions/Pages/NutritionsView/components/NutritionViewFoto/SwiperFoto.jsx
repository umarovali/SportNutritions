import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function SwiperFoto({ images, initialIndex, onClose }) {
    return (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[1000]">
            <Swiper
                className="w-[100%] h-[400px] bg-white p-5"
                pagination={true}
                modules={[Pagination]}
                initialSlide={initialIndex}
            >
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            className="w-full h-full object-contain"
                            src={image}
                            alt={`Slide ${index}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
