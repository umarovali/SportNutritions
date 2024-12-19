import React, { useEffect, useRef } from "react";

export default function SingleVideoModals({ videoUrl, onClose }) {
    const videoRef = useRef(null);

    useEffect(() => {
        // Попытка включить полноэкранный режим для видео после открытия
        if (videoRef.current) {
            videoRef.current.requestFullscreen?.();
        }

        // Обработчик выхода из полноэкранного режима не вызывает закрытие модалки
        const handleFullscreenChange = () => {
            // Не делаем ничего при выходе из полноэкранного режима
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    const handleClose = () => {
        onClose(); // Закрываем модалку вручную
    };

    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={handleClose}
        >
            <div
                className="relative w-full max-w-[90%] max-h-[90%]"
                onClick={(e) => e.stopPropagation()} // Предотвращает закрытие при клике на видео
            >
                <video
                    ref={videoRef}
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain rounded-[25px]"
                />
            </div>
        </div>
    );
}