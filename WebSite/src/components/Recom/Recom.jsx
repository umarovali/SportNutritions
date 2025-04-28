import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import api from "../../utils/axiosInstance";

export default function Recom({ url }) {
    const [recom, setRecom] = useState([]);

    useEffect(() => {
        api(url)
            .then(data => setRecom(data.data)
            )
    }, [])
    

    return (
        <section className="mt-[20px]">
            <div className="container">
                <h3 className='font-openSans text-[22px] font-[500] text-[#1E1E1E]'>Р<span className='text-[#CF2516]'>екомендации</span></h3>
                <ul className="grid grid-cols-2 gap-x-[15px] mt-[16px] mb-[150px]">
                    {recom?.sort(() => Math.random() - 0.5).map((item) => (
                        <ProductItem key={item.id} item={item} requestText={url} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
