import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../../utils/axiosInstance";
import ProductItem from "../../components/ProductItem/ProductItem";
import { TbMoodEmpty } from "react-icons/tb";

export default function Products() {
    const { filter } = useParams();
    const [product, setProduct] = useState({
        isLoading: true,
        isError: false,
        data: [],
    })


    useEffect(() => {
        api(`/${filter?.length > 20 ? "accessories" : "nutrition"}/?${filter}`)
            .then(data => setProduct({
                isLoading: true,
                isError: false,
                data: data.data,
            }))
    }, [])

    if (!product.data?.length) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-lg font-medium text-gray-500 flex items-center gap-3">Пусто <TbMoodEmpty className="text-[25px] pt-[4px]" /></p>
            </div>
        );
    }

    return (
        <>
            <section>
                <div className="container">
                    <ul className='grid grid-cols-2 gap-x-[15px] mt-[16px] mb-[100px]'>
                        {product.data?.map((item) => (
                            <ProductItem requestText={`${filter.length > 20 ? "accessories" : "nutrition"}`} key={item.id} item={item} />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}
