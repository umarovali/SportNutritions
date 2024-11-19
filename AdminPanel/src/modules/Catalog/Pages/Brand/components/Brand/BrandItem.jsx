import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

export default function BrandItem({ Foto, text }) {
    return (
        <li className='w-[100%] h-[120px] cursor-pointer border-[1px] border-[#A19E9E] rounded-[15px] flex items-center  max-[350px]:h-[100]'>
                <img className='max-w-[140px] h-[100%] rounded-l-[15px] flex justify-center items-center border-r-[1px] border-r-[#A19E9E] object-cover max-[350px]:max-w-[110px]' src={Foto} alt="" />
                <div className="w-[100%] h-[100%] flex flex-col justify-between py-[7px]">
                    <p className="font-openSans font-[600] h-[75px] text-[20px] text-[#1E1E1E] px-[20px] flex items-center justify-center text-center  max-[350px]:text-[18px]">{text}</p>
                    <div className="grid grid-cols-2 px-[5px] gap-[5px]">
                        <button className="border-[1px] border-[#CF2516] bg-[#cf251631] text-[#CF2516] rounded-[4px] flex items-center justify-center py-[2px]"><RiDeleteBin6Line /></button>
                        <button className="border-[1px] border-[#cf9116] bg-[#cf911639] text-[#cf9116] rounded-[4px] flex items-center justify-center py-[2px]"><TbEdit /></button>
                    </div>
                </div>
        </li>
    )
}
