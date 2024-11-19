import { TbAdjustments } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
    return (
        <section>
            <div className='container'>
                <div className='w-[100%] h-[40px] mt-[16px] flex rounded-[15px] shadow-[2px_2px_8px_0_rgba(0,0,0,0.25)] relative'>
                    <CiSearch className="text-[#A29E9E] text-[30px] absolute left-[7px] top-[5px]" />
                    <input type="text" className="w-[100%] h-[100%] border-[1px] border-[#A29E9E] border-r-0 rounded-l-[15px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[42px] outline-none" placeholder="Поиск по названию" />
                    <button className='w-[54px] h-[100%] rounded-r-[15px] bg-[#CF2516] flex items-center justify-center pr-[3px]'>
                        <TbAdjustments className="text-white text-[28px]" />
                    </button>
                </div>
            </div>
        </section>
    )
}
