import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../../assets/icons/Back_icon.svg";
import { MdSlowMotionVideo } from "react-icons/md";
import SingleVideoModals from "./SingleModals/SingleVideoModals";

export default function SingleHeader({ videoUrl }) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <header className="bg-[#ffffff00] w-[100%] py-[8px] fixed left-0 top-0 z-[100] shadow-sm">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <img
                            onClick={() => navigate(-1)}
                            className="w-[35px] h-[35px] cursor-pointer"
                            src={BackIcon}
                            alt="back"
                        />
                        {videoUrl && (
                            <MdSlowMotionVideo
                                className="text-[#fff] text-[30px] bg-[#CF2516] rounded-full p-[3px] cursor-pointer"
                                onClick={openModal}
                            />
                        )}
                    </div>
                </div>
            </header>

            {isModalOpen && (
                <SingleVideoModals videoUrl={videoUrl} onClose={closeModal} />
            )}
        </>
    );
}