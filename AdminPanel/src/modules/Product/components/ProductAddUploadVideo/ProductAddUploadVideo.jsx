import { useState, useRef, useEffect } from "react";
import { RiVideoUploadLine, RiVideoDownloadLine } from "react-icons/ri";
import useUploadVideo from "../../../../store/uploadVideo";
import ModalVideo from "../../Nutritions/components/ModalVideo";

export default function ProductAddUploadVideo({ setVideo }) {
    const inputRef = useRef(null);
    const videoRef = useRef(null);
    const { videoUrl, uploadVideo, resetVideoUrl } = useUploadVideo();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFileUpload = (evt) => {
        evt.preventDefault();
        inputRef.current?.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            uploadVideo(file);
        }
    };

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

    useEffect(() => {
        if (videoUrl) {
            setVideo(videoUrl);
        }
    }, [videoUrl, setVideo]);


    useEffect(() => {
        return () => {
            resetVideoUrl();
        };
    }, [resetVideoUrl]);

    return (
        <>
            <div className="grid grid-cols-2 gap-[10px]">
                <div>
                    <input
                        type="file"
                        ref={inputRef}
                        hidden
                        accept="video/*"
                        onChange={handleFileChange}
                    />
                    <button
                        onClick={handleFileUpload}
                        className="bg-[#CF2516] w-[100%] justify-center flex gap-[10px] items-center py-[4px] text-[16px] font-openSans tracking-[0.5px] text-[#fff] rounded-[5px]"
                    >
                        Загрузить <RiVideoDownloadLine />
                    </button>
                </div>

                {videoUrl && (
                    <button
                        onClick={openModal}
                        className="bg-[#CF2516] w-[100%] justify-center flex gap-[10px] items-center py-[4px] text-[16px] font-openSans tracking-[0.5px] text-[#fff] rounded-[5px]"
                    >
                        Смотреть <RiVideoUploadLine />
                    </button>
                )}
            </div>

            {isModalOpen && (
                <ModalVideo closeModal={closeModal} videoRef={videoRef} videoUrl={videoUrl} />
            )}
        </>
    );
}