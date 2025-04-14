import { useEffect, useState } from 'react';
import HomeBrandItem from './HomeBrandItem';
import useBrand from "../../../../store/useBrand";

export default function HomeBrand() {
    const { dataBrand, fetchDataBrand } = useBrand();

    useEffect(() => {
        fetchDataBrand()
    }, [])

    return (
        <section className='pt-[15px]'>
            <div className="container">
                <h2 className='font-openSans text-[17px] font-[400] text-[#1E1E1E]'>Б<span className='text-[#CF2516]'>ренды</span></h2>
                <ul className='flex gap-[10px] mt-[12px] overflow-x-auto '>
                    {dataBrand?.map((item) => (
                        <HomeBrandItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
