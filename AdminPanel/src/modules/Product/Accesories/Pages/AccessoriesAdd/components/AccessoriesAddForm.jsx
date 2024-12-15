import { useRef, useState } from "react";
import ProductAddUploadFoto from "../../../../components/ProductAddUploadFoto/ProductAddUploadFoto";
import ProductAddUploadVideo from "../../../../components/ProductAddUploadVideo/ProductAddUploadVideo";
import { AccessAddSelectCtegroy } from "../../../../components/ProductAddSelect/ProductAddSelect";
import api from "../../../../../../utils/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AccessoriesAddForm() {
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState("");
    const [categroyAccess, setCategroyAccess] = useState("");
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const navigate = useNavigate();

    const createAccessories = (evt) => {
        evt.preventDefault()
        const formData = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            accessoriesCategroy_id: +categroyAccess,
            video: video,
            image: images,
        }

        api.post("/accessories/create/", formData)
            .then(() => {
                toast.success("Успешно добавлено!")
                navigate(-1)
            })
            .catch((error) => {
                toast.error("Заполните все поля!")
            })
    }

    return (
        <section>
            <div className="container">
                <form onSubmit={createAccessories} className="pt-[20px] px-[8px] flex flex-col gap-[8px] mt-[50px] pb-[95px]">
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Загрузить фото</h4>
                    <ProductAddUploadFoto images={images} setImages={setImages} />
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Загрузить видео</h4>
                    <ProductAddUploadVideo video={video} setVideo={setVideo} />
                    <div className="flex flex-col gap-[6px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Наимование</label>
                        <input ref={nameRef} className="w-[100%] h-[35px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[14px] outline-none" type="text" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Описание</label>
                        <textarea ref={descriptionRef} className="w-[100%] h-[150px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] p-[14px] outline-none" type="text" />
                    </div>

                    <div className="grid grid-cols-2 gap-[10px]">
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Цена</label>
                            <input ref={priceRef} className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] pl-[14px] outline-none" type="number" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Категория</label>
                            <AccessAddSelectCtegroy setCategroyAccess={setCategroyAccess} />
                        </div>
                    </div>
                    <center>
                        <button type="submit" className="w-[90%] h-[30px] bg-[#CF2516] rounded-[10px] text-[#FFF] tracking-[1px] font-golos text-[18px] border-[1px] border-[#A29E9E] mt-[15px]">
                            Добавить
                        </button>
                    </center>
                </form>
            </div>
        </section>
    )
}
