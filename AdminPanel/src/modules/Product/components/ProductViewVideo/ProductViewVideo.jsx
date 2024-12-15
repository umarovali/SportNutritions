import { RiVideoUploadLine } from 'react-icons/ri';
import { useState, useRef } from 'react';
import ModalVideo from '../../Nutritions/components/ModalVideo';

export default function ProductViewVideo({ videoUrl }) {
    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (evt) => {
        evt.preventDefault();
        setIsModalOpen(true);

        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
                if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                } else if (videoRef.current.webkitRequestFullscreen) {
                    videoRef.current.webkitRequestFullscreen();
                } else if (videoRef.current.msRequestFullscreen) {
                    videoRef.current.msRequestFullscreen();
                }
            }
        }, 0);
    };

    const closeModal = (evt) => {
        evt.preventDefault();
        setIsModalOpen(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <>
            <button
                onClick={openModal}
                className="bg-[#CF2516] w-[60%] mt-[10px] justify-center flex gap-[10px] items-center py-[4px] text-[16px] font-openSans tracking-[0.5px] text-[#fff] rounded-[5px]"
            >
                Смотреть <RiVideoUploadLine />
            </button>

            {isModalOpen && (
                <ModalVideo closeModal={closeModal} videoRef={videoRef} videoUrl={videoUrl} />
            )}
        </>
    );
}
