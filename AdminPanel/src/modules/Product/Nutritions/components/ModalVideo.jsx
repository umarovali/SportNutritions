
export default function ModalVideo({ closeModal, videoRef, videoUrl }) {
    return (
        <div
            className="fixed z-[1000] inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="bg-white rounded-lg w-[80%] max-w-[600px]"
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    ref={videoRef}
                    controls
                    src={videoUrl}
                    className="w-full rounded-lg"
                ></video>
            </div>
        </div>
    )
}
