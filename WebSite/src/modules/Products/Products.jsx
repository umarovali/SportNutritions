import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../../utils/axiosInstance";
import ProductItem from "../../components/ProductItem/ProductItem";
import { TbMoodEmpty } from "react-icons/tb";

const shuffleArray = (array) => {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

export default function Products() {
    const { filter } = useParams();
    const [product, setProduct] = useState({
        isLoading: true,
        isError: false,
        data: [],
    });

    useEffect(() => {
        api(`/${filter?.length > 20 ? "accessories" : "nutrition"}/?${filter}`)
            .then(data => setProduct({
                isLoading: false,
                isError: false,
                data: shuffleArray(data.data),  
            }))
            .catch(error => {
                setProduct({
                    isLoading: false,
                    isError: error.message,
                    data: [],
                });
            });
    }, [filter]);

    if (product.isLoading) {
        return <div className="text-center">Загрузка...</div>;
    }

    if (product.isError) {
        return (
            <div className="absolute left-0 top-[-60px] bg-[#fff] w-[100%] h-[100%]">
                {product.isError}
            </div>
        );
    }

    if (!product.data?.length) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-lg font-medium text-gray-500 flex items-center gap-3">Пусто <TbMoodEmpty className="text-[25px] pt-[4px]" /></p>
            </div>
        );
    }

    return (
        <section>
            <div className="container">
                <ul className='grid grid-cols-2 gap-x-[15px] mt-[16px] mb-[100px]'>
                    {product.data.map((item) => (
                        <ProductItem requestText={`${filter.length > 20 ? "accessories" : "nutrition"}`} key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    );
}