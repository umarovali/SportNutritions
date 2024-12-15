import { useRef, useEffect, useState } from "react";
import { RiVideoDownloadLine, RiVideoUploadLine } from "react-icons/ri";
import useUploadVideo from "../../../../../../store/uploadVideo";
import ModalVideo from "../../../components/ModalVideo";

export default function NutritionEditUploadVideo({ setVideo, video }) {
    const { uploadVideo, videoUrl } = useUploadVideo();
    const fileInputRef = useRef(null);
    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            uploadVideo(file);
        }
    };

    const handleButtonClick = (evt) => {
        evt.preventDefault()
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    useEffect(() => {
        if (videoUrl) {
            setVideo(videoUrl);
        }
    }, [videoUrl]);

    const openModal = (evt) => {
        evt.preventDefault();
        setIsModalOpen(true);

        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
                if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                } else if (videoRef.current.webkitRequestFullscreen) {
                    videoRef.current.webkitRequestFullscreen()
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
        <div className="grid grid-cols-2 gap-[10px] mt-[10px]">
            <div>
                <input
                    type="file"
                    ref={fileInputRef}
                    hidden
                    accept="video/*"
                    onChange={handleFileChange}
                />
                <button
                    onClick={handleButtonClick}
                    className="bg-[#CF2516] w-[100%] justify-center flex gap-[10px] items-center py-[4px] text-[16px] font-openSans tracking-[0.5px] text-[#fff] rounded-[5px]"
                >
                    {video.length ? "Изменить" : "Загрузить"} <RiVideoDownloadLine />
                </button>
            </div>



            {video.length ?
                <button
                    onClick={openModal}
                    className="bg-[#CF2516] w-[100%] justify-center flex gap-[10px] items-center py-[4px] text-[16px] font-openSans tracking-[0.5px] text-[#fff] rounded-[5px]"
                >
                    Смотреть <RiVideoUploadLine />
                </button> : null
            }




            {isModalOpen && (
                <ModalVideo closeModal={closeModal} videoRef={videoRef} videoUrl={video} />
            )}
        </div>
    );
}
