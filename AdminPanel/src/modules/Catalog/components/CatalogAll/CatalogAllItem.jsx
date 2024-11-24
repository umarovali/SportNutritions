import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import api from "../../../../utils/axiosInstance";
import toast from "react-hot-toast";
import { useState } from "react";
import ModalEdit from "../Modals/ModalEdit";
import useCatalog from "../../../../store/useCatalog";

export default function CategoryAllItem({ item, request }) {
    const [openModal, setOpenModal] = useState(false);
    const { fetchData } = useCatalog();
    const { id, name, image } = item;

    const handleDelete = () => {
        api.delete(`/${request}/${id}/`)
            .then((res) => {
                fetchData(`/${request}/`)
                toast.success("Успешно удалено!")
            })
            .catch((error) => {
                toast.error("Ошибка при удалении!")
            });
    };

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <li className="w-[100%] h-[120px] cursor-pointer border-[1px] border-[#A19E9E] rounded-[15px] flex items-center max-[360px]:h-[110px]">
            <img
                className="min-w-[140px] max-w-[140px] h-[100%] rounded-l-[15px] flex justify-center items-center border-r-[1px] border-r-[#A19E9E] object-cover max-[360px]:max-w-[130px] max-[360px]:min-w-[130px]"
                src={image}
                alt={name}
            />
            <div className="w-[100%] h-[100%] flex flex-col justify-between py-[7px]">
                <p className="font-openSans font-[600] h-[75px] text-[18px] text-[#1E1E1E] px-[20px] flex items-center justify-center text-center max-[360px]:text-[16px]">
                    {name}
                </p>
                <div className="grid grid-cols-2 px-[5px] gap-[5px]">
                    <button
                        onClick={handleDelete}
                        className="border-[1px] border-[#CF2516] bg-[#cf251631] text-[#CF2516] rounded-[4px] flex items-center justify-center py-[2px]"
                    >
                        <RiDeleteBin6Line />
                    </button>
                    <button onClick={handleOpenModal} className="border-[1px] border-[#cf9116] bg-[#cf911639] text-[#cf9116] rounded-[4px] flex items-center justify-center py-[2px]">
                        <TbEdit />
                    </button>

                    {openModal &&
                        <ModalEdit item={item} handleOpenModal={handleOpenModal} request={request} />
                    }
                </div>
            </div>
        </li>
    );
}
