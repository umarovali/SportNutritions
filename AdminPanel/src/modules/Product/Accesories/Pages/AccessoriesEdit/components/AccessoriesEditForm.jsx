import React, { useEffect, useState } from 'react'
import AccessoriesEditUploadFoto from './AccessoriesEditUploadFoto/AccessoriesEditUploadFoto'
import AccessoriesEditUploadVideo from './AccessoriesEditUploadVideo';
import { AccessoriesEditSelect } from './AccessoriesEditSelect';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingPage from '../../../../../../components/LoadingPage/LoadingPage';
import ErrorPage from '../../../../../../components/ErrorPage/ErrorPage';
import api from '../../../../../../utils/axiosInstance';
import toast from 'react-hot-toast';

export default function AccessoriesEditForm() {
    const [item, setItem] = useState({
        isLoading: true,
        isError: false,
        data: {},
    })
    const { id } = useParams();
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [videoUrl, setVideoUrl] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState();

    useEffect(() => {
        api(`accessories/${id}`)
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
                setCategory(data.accessoriesCategroy);
                setImages([...data?.image]);
                setVideoUrl(data?.video);
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
            accessoriesCategroy_id: category.id,
            image: images,
            video: videoUrl,
        }
        console.log(formData);

        api.put(`accessories/${id}/`, formData)
            .then(res => {
                toast.success("Успешно обновлено!")
                navigate(-1)
            })
    }

    return (
        <section>
            <div className="container">
                <form onSubmit={handleEditSubmit} className="pt-[20px] px-[8px] flex flex-col gap-[8px] mt-[50px] pb-[95px]">
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Загрузить фото</h4>
                    <AccessoriesEditUploadFoto images={images} setImages={setImages} />
                    <h4 className="font-openSans font-[500] text-[#1E1E1E]">Загрузить видео</h4>
                    <AccessoriesEditUploadVideo video={videoUrl} setVideo={setVideoUrl} />
                    <div className="flex flex-col gap-[6px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Наимование</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-[100%] h-[35px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[14px] outline-none" type="text" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Описание</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-[100%] h-[150px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] p-[14px] outline-none" type="text" />
                    </div>

                    <div className="grid grid-cols-2 gap-[10px]">
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Цена</label>
                            <input
                                value={price.split('.')[0]}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] pl-[14px] outline-none" type="number" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Категория</label>
                            <AccessoriesEditSelect category={category} setCategory={setCategory} />
                        </div>
                    </div>
                    <center>
                        <button type="submit" className="w-[90%] h-[30px] bg-[#CF2516] rounded-[10px] text-[#FFF] tracking-[1px] font-golos text-[18px] border-[1px] border-[#A29E9E] mt-[15px]">
                            Изменить
                        </button>
                    </center>
                </form>
            </div>
        </section>
    )
}
