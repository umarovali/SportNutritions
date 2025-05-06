import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";
import { TbBrandTelegram } from "react-icons/tb";

export default function SocialSetList() {
    return (
        <section className="mt-[20px]">
            <div className="container">
                <h3 className="text-[16px] font-[600] font-popins text-[#1e1e1e] tracking-[1px]">Подписывайся и стань сильнее!</h3>
                <ul className="mt-[20px] flex flex-col gap-[12px] mx-[10px] mb-[90px]">
                    <li style={{
                        background: "linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
                    }} className="w-full h-[45px] rounded-[10px] flex justify-center items-center relative cursor-pointer">
                        <a href="">
                            <FaInstagram className="text-[#FFf] text-[26px] absolute left-[10px] top-[50%] translate-y-[-50%]" />  <p className="text-[20px] tracking-[1px] font-golos text-[#Fff]">Instagram</p>
                        </a>
                    </li>
                    <li  className="w-full bg-[#111111] h-[45px] rounded-[10px] flex justify-center items-center relative cursor-pointer">
                        <a href="">
                            <PiTiktokLogo className="text-[#FFf] text-[26px] absolute left-[10px] top-[50%] translate-y-[-50%]" />  <p className="text-[20px] tracking-[1px] font-golos text-[#Fff]">Tik Tok</p>
                        </a>
                    </li>
                    <li  className="w-full bg-[#24a1de] h-[45px] rounded-[10px] flex justify-center items-center relative cursor-pointer">
                        <a href="">
                            <TbBrandTelegram className="text-[#FFf] text-[26px] absolute left-[10px] top-[50%] translate-y-[-50%]" />  <p className="text-[20px] tracking-[1px] font-golos text-[#Fff]">Telegram</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}