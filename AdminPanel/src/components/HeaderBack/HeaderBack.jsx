import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function HeaderBack({ text, span }) {
    const navigate = useNavigate();

    return (
        <header className='bg-[#fff] w-[100%] h-[60px] flex items-center shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] fixed left-0 top-0 z-[1000]'>
            <div className="container">
                <div className="flex items-center">
                    <button className="text-[24px] text-[#CF2516] border-[2px] py-[2px] pr-[3px] pl-[2px] rounded-[5px] border-[#CF2516] flex items-center justify-center" onClick={() => {navigate(-1)}}><IoChevronBack /></button>
                    <h1 className='font-golos font-[600] tracking-[0.5px] text-[18px] text-[#1E1E1E] text-center w-[89%] uppercase'>{text}<span className="text-[#CF2516]">{span}</span></h1>
                </div>
            </div>
        </header>
    )
}
