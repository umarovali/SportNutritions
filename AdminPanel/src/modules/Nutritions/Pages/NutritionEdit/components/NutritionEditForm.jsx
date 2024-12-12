import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../../../../../components/LoadingPage/LoadingPage";
import ErrorPage from "../../../../../components/ErrorPage/ErrorPage";
import api from "../../../../../utils/axiosInstance";
import NutritionsEditUploadFoto from "./NutritionsEditUploadFoto/NutritionsEditUploadFoto";
import NutritionEditUploadVideo from "./NutritionEditUploadVideo";
import NutritionEditInfo from "./NutritionEditInfo";
import { NutritionEditSelectBrand, NutritionEditSelectCategory, NutritionEditSelectGoals } from "./NutritionEditSelect";
import toast from "react-hot-toast";

export default function NutritionEditForm() {
    const [item, setItem] = useState({
        isLoading: true,
        isError: false,
        data: {},
    });
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);
    const [videoUrl, setVideoUrl] = useState("");
    const [extraInfo, setExtraInfo] = useState([]);
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();
    const [goals, setGoals] = useState();

    useEffect(() => {
        api(`nutrition/${id}`)
            .then(response => {
                const data = response.data;
                setItem({
                    isLoading: false,
                    isError: false,
                    data: data,
                });
                setName(data.name || "");
                setDescription(data.description || "");
                setPrice(data.price || "");
                setCategory(data.category);
                setBrand(data.brand);
                setGoals(data.goal);
                setImages([...data?.image]);
                setVideoUrl(data?.video);
                setExtraInfo(data?.extra_info);
            })
            .catch(() => {
                setItem({
                    isLoading: false,
                    isError: true,
                    data: {},
                });
            });
    }, [id]);

    if (item.isLoading) return <div className="mt-[300px]"><LoadingPage /></div>;
    if (item.isError) return <div className="mt-[100px]"><ErrorPage /></div>;

    const handleEditSubmit = (evt) => {
        evt.preventDefault();
        const formData = {
            name: name,
            description: description,
            price: price,
            brand_id: brand.id,
            category_id: category.id,
            goal_id: goals.id,
            image: images,
            video: videoUrl,
            extra_info: extraInfo,
        }

        api.put(`nutrition/${id}/`, formData)
            .then(res => {
                toast.success("Успешно обновлено!")
                navigate(-1)
            })
    }

    return (
        <section className="mt-[80px] mb-[90px]">
            <div className="container">
                <form onSubmit={handleEditSubmit}>
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Загрузить фото</h4>
                    <NutritionsEditUploadFoto images={images} setImages={setImages} />
                    <NutritionEditUploadVideo video={videoUrl} setVideo={setVideoUrl} />

                    <div className="flex flex-col gap-[6px] pt-[10px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Наименование</label>
                        <input
                            className="w-[100%] h-[35px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[14px] outline-none"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-[6px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Описание</label>
                        <textarea
                            className="w-[100%] h-[150px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] p-[14px] outline-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-[10px]">
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Категория</label>
                            <NutritionEditSelectCategory category={category} setCategory={setCategory} />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Цена</label>
                            <input
                                className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] pl-[14px] outline-none"
                                type="number"
                                value={price.split('.')[0]}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Бренд</label>
                            <NutritionEditSelectBrand brand={brand} setBrand={setBrand} />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Цель</label>
                            <NutritionEditSelectGoals goals={goals} setGoals={setGoals} />
                        </div>
                    </div>
                    <NutritionEditInfo extraInfo={extraInfo} setExtraInfo={setExtraInfo} />
                    <center>
                        <button type="submit" className="w-[90%] h-[30px] bg-[#CF2516] rounded-[10px] text-[#FFF] tracking-[1px] font-golos text-[18px] border-[1px] border-[#A29E9E] mt-[15px]">
                            Изменить
                        </button>
                    </center>
                </form>
            </div>
        </section>
    );
}