import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SingleFotoModals({ images, currentIndex, onClose }) {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-85 z-[1000]"
            onClick={onClose}
        >
            <div className="relative w-full max-w-[100%] max-h-[100%]">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    initialSlide={currentIndex}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    className="w-full h-full"
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {images?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={item}
                                alt={`Image ${index + 1}`}
                                className="aspect-square object-cover w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
