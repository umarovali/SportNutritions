import NutritionAddInfo from "./NutritionAddInfo";
import NutritionsAddUploadFoto from "./NutritionsAddUploadFoto/NutritionsAddUploadFoto";
import { NutritionAddSelectBrand, NutritionAddSelectGoals, NutritionAddSelectCategory } from "./NutritionAddSelect";
import NutritionAddUploadVideo from "./NutritionAddUploadVideo";
import { useRef, useState } from "react";
import api from "../../../../../utils/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function NutritionAddForm() {
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState("");
    const [extraInfo, setExtraInfo] = useState([]);
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState();
    const [goals, setGoals] = useState();
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const navigate = useNavigate();

    const createNutrition = (evt) => {
        evt.preventDefault()
        const formData = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            brand_id: +brand,
            category_id: +category,
            goal_id: +goals,
            video: video,
            image: images,
            extra_info: extraInfo
        }


        api.post("/nutrition/create/", formData)
            .then(res => {
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
                <form onSubmit={createNutrition} className='pt-[20px] px-[8px] flex flex-col gap-[8px] mt-[50px] pb-[95px]'>
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Загрузить фото</h4>
                    <NutritionsAddUploadFoto images={images} setImages={setImages} />
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Загрузить видео</h4>
                    <NutritionAddUploadVideo setVideo={setVideo} />
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
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Категория</label>
                            <NutritionAddSelectCategory setCategory={setCategory} />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Цена</label>
                            <input ref={priceRef} className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] pl-[14px] outline-none" type="number" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Бренд</label>
                            <NutritionAddSelectBrand setBrand={setBrand} />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Цель</label>
                            <NutritionAddSelectGoals setGoals={setGoals} />
                        </div>
                    </div>

                    <NutritionAddInfo setExtraInfo={setExtraInfo} />
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