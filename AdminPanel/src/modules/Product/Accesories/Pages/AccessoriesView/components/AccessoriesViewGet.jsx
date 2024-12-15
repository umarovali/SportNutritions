import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../../../../components/LoadingPage/LoadingPage";
import ErrorPage from "../../../../../../components/ErrorPage/ErrorPage";
import api from "../../../../../../utils/axiosInstance";
import ProductViewFoto from "../../../../components/ProductViewFoto/ProductViewFoto";
import ProductViewVideo from "../../../../components/ProductViewVideo/ProductViewVideo";

export default function AccessoriesViewGet() {
    const [item, setItem] = useState({
        isLoading: true,
        isError: false,
        data: [],
    });
    const { id } = useParams();

    const { name, description, video, price, accessoriesCategroy } = item.data;

    useEffect(() => {
        api(`accessories/${id}/`)
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
                <ProductViewFoto images={item?.data?.image} />
                {video.length ?
                    <>
                        <h4 className="font-openSans font-[500] text-[#1E1E1E]">Видео</h4>
                        <ProductViewVideo videoUrl={video} />
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
                <div className="grid grid-cols-2 gap-[10px] mt-[10px] mb-[95px]">
                    <div className="flex flex-col gap-[6px]">
                        <h4 className="font-openSans font-[500] text-[#1E1E1E]">Цена</h4>
                        <div className="w-[100%] h-[28px] flex items-center justify-start border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] pl-[14px] bg-[#a29e9e1f]">
                            {price.split('.')[0] + "сом"}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <h4 className="font-openSans font-[500] text-[#1E1E1E]">Категория</h4>
                        <div className="w-[100%] h-[28px] flex items-center justify-start border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] pl-[14px] bg-[#a29e9e1f]">
                            {accessoriesCategroy?.name}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
