import { useState } from "react";
import SwiperFoto from "./SwiperFoto";

export default function NutritionsViewFoto({ images }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);


    return (
        <>
            <ul className="flex gap-[10px] items-center overflow-x-auto flex-nowrap py-[12px] px-[12px]">
                {images?.map((item, index) => (
                    <li key={index} onClick={() => handleImageClick(index)}>
                        <img
                            className="max-w-[100px] min-w-[100px] h-[100px] object-cover rounded-[5px] shadow-[0px_0px_8px_1px_rgba(0,0,0,0.3)] cursor-pointer"
                            src={item}
                            alt=""
                        />
                    </li>
                ))}
            </ul>
            {modalOpen && (
                <SwiperFoto
                    images={images}
                    initialIndex={currentImageIndex}
                    onClose={closeModal}
                />
            )}
        </>
    );
}