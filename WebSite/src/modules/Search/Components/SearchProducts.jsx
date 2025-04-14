import { useEffect, useState } from "react";
import ProductItem from "../../../components/ProductItem/ProductItem";
import { TbMoodEmpty } from "react-icons/tb";

export default function SearchProducts({ data, choose }) {
    const [requestText, setRequestText] = useState("nutrition");

    useEffect(() => {
        setRequestText(choose ? "accessories" : "nutrition");
    }, [choose]);

    if (!data || !data[requestText] || data[requestText].length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-lg font-medium text-gray-500 flex items-center gap-3">Пусто <TbMoodEmpty className="text-[25px] pt-[4px]" /></p>
            </div>
        );
    }

    return (
        <section>
            <div className="container">
                <ul className="grid grid-cols-2 gap-x-[15px] mt-[16px] mb-[100px] -z-[1000]">
                    {data[requestText].map((item) => (
                        <ProductItem requestText={"nutrition"} key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
