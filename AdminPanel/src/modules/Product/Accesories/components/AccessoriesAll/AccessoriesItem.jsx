import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import api from "../../../../../utils/axiosInstance";
import toast from "react-hot-toast";
import useAccessories from "../../../../../store/useAccessories";

export default function AccessoriesItem({ item }) {
    const { id, name, price, description, accessoriesCategroy } = item;
    const { fetchData } = useAccessories();


    const handleDeleteItem = () => {
        api.delete(`/accessories/${id}/`)
            .then(() => {
                toast.success("Успешно удалено!")
                fetchData()
            })
    }

    return (
        <li className="w-[100%] p-[10px] rounded-[10px] shadow-[0px_0px_15px_3px_rgba(0,0,0,0.2)]">
            <Link to={`/accesories/accessories-view/${id}`}>
                <h1 className="font-[500] font-golos text-[16px] text-[#1e1e1e] truncate">{name}</h1>
                <table className="w-[100%]">
                    <tbody>
                        <tr className=" w-[100%] gap-[12px] grid grid-cols-2">
                            <td className="font-[400] text-[#A29E9E] font-golos text-[14px] truncate">Цена</td>
                            <td className="font-[400] font-golos text-[14px] text-[#1e1e1e] truncate text-right">{price.split('.')[0]}сом</td>
                        </tr>
                        <tr className=" w-[100%] gap-[12px] grid grid-cols-2">
                            <td className="font-[400] text-[#A29E9E] font-golos text-[14px] truncate">Описания</td>
                            <td className="font-[400] font-golos text-[14px] text-[#1e1e1e] truncate text-right">{description}</td>
                        </tr>
                        <tr className=" w-[100%] gap-[12px] grid grid-cols-2">
                            <td className="font-[400] text-[#A29E9E] font-golos text-[14px] truncate">Бренд</td>
                            <td className="font-[400] font-golos text-[14px] text-[#1e1e1e] truncate text-right">{accessoriesCategroy.name}</td>
                        </tr>
                    </tbody>
                </table>
            </Link>
            <div className="grid grid-cols-2 gap-[10px] mt-[8px]">
                <button onClick={handleDeleteItem} className="border-[1px] border-[#CF2516] bg-[#cf251631] text-[#CF2516] rounded-[4px] flex items-center justify-center py-[4px]">
                    <RiDeleteBin6Line />
                </button>
                <Link to={`/accesories/accessories-edit/${id}`} className="border-[1px] border-[#cf9116] bg-[#cf911639] text-[#cf9116] rounded-[4px] flex items-center justify-center py-[2px]">
                    <button>
                        <TbEdit />
                    </button>
                </Link>
            </div>
        </li >
    )
}
