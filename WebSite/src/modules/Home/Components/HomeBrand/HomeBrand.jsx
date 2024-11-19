import { useEffect, useState } from 'react';
import HomeBrandItem from './HomeBrandItem';
import axios from "axios";

export default function HomeBrand() {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios("http://127.0.0.1:8000/api/brand/")
            .then(brands => setBrands(brands.data))
    }, [])

    return (
        <section className='pt-[15px]'>
            <div className="container">
                <h2 className='font-openSans text-[17px] font-[400] text-[#1E1E1E]'>Б<span className='text-[#CF2516]'>ренды</span></h2>
                <ul className='flex gap-[10px] mt-[12px] overflow-x-auto '>
                    {brands.map((item) => (
                        <HomeBrandItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
