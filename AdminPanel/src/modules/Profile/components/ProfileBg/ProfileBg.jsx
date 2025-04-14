import { FaUsers } from "react-icons/fa6";
import { RiShareForwardFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ProfileBg() {
    return (
        <section className="mt-[10px]">
            <div className="container">
                <div className="bg-[#Fff] rounded-[12px] w-full shadow-[2px_2px_5px_0_rgba(0,0,0,0.25)] p-[15px]">
                    <h3 className="text-[24px] font-[400] font-golos text-[#1e1e1e]">#Сервис</h3>

                    <ul className="pl-[14px] pt-[10px] flex flex-col gap-[12px] pb-[5px]">
                        <li className="flex items-center gap-[20px] text-[#7A7A7A] text-[22px] font-[400] cursor-pointer hover:text-[#636363] hover:pl-[8px] duration-200"><FaUsers className="text-[32px]" /> Все пользователи</li>
                        <li className="flex items-center gap-[20px] text-[#7A7A7A] text-[22px] font-[400] cursor-pointer hover:text-[#636363] hover:pl-[8px] duration-200"><RiShareForwardFill className="text-[32px]" /> О приложении</li>
                        <li className="flex items-center gap-[20px] text-[#7A7A7A] text-[22px] font-[400] cursor-pointer hover:text-[#636363] hover:pl-[8px] duration-200"><MdOutlineSupportAgent className="text-[32px]" /> Служба поддержки</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}