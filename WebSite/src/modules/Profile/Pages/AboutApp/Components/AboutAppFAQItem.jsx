import { IoIosArrowDown } from "react-icons/io";

export default function AboutAppFAQItem({ text, isOpen, onClick }) {
    return (
        <li
            className="cursor-pointer text-[#1e1e1ee4] flex flex-col"
            onClick={onClick}
        >
            <div className='text-[16px] font-[500] font-popins flex justify-between items-start gap-[30px]'>
                <p>{text}</p>
                <IoIosArrowDown className={`text-[22px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </div>
        </li>
    );
}