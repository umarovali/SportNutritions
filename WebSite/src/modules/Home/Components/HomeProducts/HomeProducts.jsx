import { useEffect, useState } from "react";
import ProductItem from "../../../../components/ProductItem/ProductItem";
import useProduct from "../../../../store/useProduct";

export default function HomeProducts({ requestText }) {
    const { data, fetchData, isLoading, isError } = useProduct();

    useEffect(() => {
        fetchData(`/${requestText}/`)
    }, [requestText])

    if (isLoading) return isLoading
    if (isError) return <div className="absolute left-0 top-[-60px] bg-[#fff] w-[100%] h-[100%]">{isError}</div>

    return (
        <section>
            <div className="container">
                <ul className='grid grid-cols-2 gap-x-[15px] mt-[16px] mb-[100px]'>
                    {data?.map((item) => (
                        <ProductItem requestText={requestText} key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
