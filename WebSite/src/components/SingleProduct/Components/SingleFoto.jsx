import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SingleFotoModals from './SingleModals/SingleFotoModals';

function SingleFoto({ images }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper border-b-[1px] border-b-[#CF2516]"
            >
                {images?.map((item, index) => (
                    <SwiperSlide key={index} className="w-full aspect-[0.8/0.8]">
                        <img
                            className="w-full h-full object-cover cursor-pointer"
                            src={item}
                            alt=""
                            onClick={() => handleImageClick(index)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedImageIndex !== null && (
                <SingleFotoModals
                    images={images}
                    currentIndex={selectedImageIndex}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default SingleFoto;