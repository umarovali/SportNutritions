import { useEffect, useState } from "react"
import api from "../../../../../utils/axiosInstance";
import { useParams } from "react-router-dom";
import NutritionsViewFoto from "./NutritionViewFoto/NutritionsViewFoto";
import NutritionViewVideo from "./NutritionViewVideo/NutritionViewVideo";
import NutritionViewCategory from "./NutritionViewCategory";
import NutritionsViewInfo from "./NutritionsViewInfo";
import LoadingPage from "../../../../../components/LoadingPage/LoadingPage";
import ErrorPage from "../../../../../components/ErrorPage/ErrorPage";

export default function NutritionsViewGet() {
    const [item, setItem] = useState({
        isLoading: true,
        isError: false,
        data: [],
    });
    const { id } = useParams();
    const { name, description, category, price, brand, goal, extra_info, video } = item.data;

    useEffect(() => {
        api(`nutrition/${id}`)
            .then(item => {
                setItem({
                    isLoading: false,
                    isError: false,
                    data: item.data,
                })
            })
            .catch(() => {
                setItem({
                    isLoading: false,
                    isError: true,
                    data: [],
                })
            })
    }, [])

    if (item.isLoading) return <div className="mt-[300px]"><LoadingPage /></div>
    if (item.isError) return <div className="mt-[100px]"><ErrorPage /></div>

    return (
        <section className="mt-[80px]">
            <div className="container">
                <h4 className="font-openSans font-[500] text-[#1E1E1E]">Фото</h4>
                <NutritionsViewFoto images={item?.data?.image} />

                {video.length ?
                    <>
                        <h4 className="font-openSans font-[500] text-[#1E1E1E]">Видео</h4>
                        <NutritionViewVideo videoUrl={video} />
                    </>
                    : null}

                <div className="flex flex-col gap-[6px] mt-[10px]">
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Наимование</h4>
                    <div className="w-[100%] h-[35px] flex items-center justify-start border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[14px] bg-[#a29e9e1f]">
                        {name}
                    </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Описание</h4>
                    <div className="w-[100%] min-h-[150px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] p-[14px] bg-[#a29e9e1f]">
                        {description}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[10px] mt-[10px]">
                    <NutritionViewCategory title={"Категория"} text={category?.name} />
                    <NutritionViewCategory title={"Цена"} text={price.split('.')[0] + "сом"} />
                    <NutritionViewCategory title={"Бренд"} text={brand?.name} />
                    <NutritionViewCategory title={"Цель"} text={goal?.name} />
                </div>
                <h4 className="font-openSans font-[500] text-[#1E1E1E] mt-[10px]">Информация</h4>
                <table className="mb-[95px] w-full mt-[10px]">
                    <NutritionsViewInfo info={extra_info} />
                </table>
            </div>
        </section>
    )
}
