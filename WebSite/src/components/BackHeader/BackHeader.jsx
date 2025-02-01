import { useNavigate } from "react-router-dom";
import BackIcon from "../../assets/icons/Back_icon.svg";

export default function BackHeader({ text, span }) {
    const navigate = useNavigate();

    return (
        <header className="bg-[#ffffff00] w-[100%] py-[8px] fixed left-0 top-0 z-[100] shadow-sm">
            <div className="container">
                <div className="flex justify-between items-center">
                    <img
                        onClick={() => navigate(-1)}
                        className="w-[35px] h-[35px] cursor-pointer"
                        src={BackIcon}
                        alt="back"
                    />
                    <h1 className='font-golos font-[500] text-[22px] text-[#1E1E1E] z-1000'>{text}<span className='text-[#CF2516]'>{span}</span></h1>
                </div>
            </div>
        </header>
    )
}
