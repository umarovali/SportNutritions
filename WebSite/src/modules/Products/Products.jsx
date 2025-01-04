import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../../utils/axiosInstance";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function Products() {
    const { filter } = useParams();
    const [product, setProduct] = useState({
        isLoading: true,
        isError: false,
        data: [],
    })


    useEffect(() => {
        api(`/${filter.length > 20 ? "accessories" : "nutrition"}/?${filter}`)
            .then(data => setProduct({
                isLoading: true,
                isError: false,
                data: data.data,
            }))
    }, [])

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
