import { useEffect } from "react";
import useAccessories from "../../../../../store/useAccessories";
import AccessoriesItem from "./AccessoriesItem";

export default function AccessoriesAll() {
    const { data, fetchData, isLoading, isError } = useAccessories();

    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading) return isLoading
    if (isError) return isError

    return (
        <section>
            <div className="container">
                <ul className="flex flex-col gap-[10px] mt-[15px] pb-[95px]">
                    {data?.map((item) => (
                        <AccessoriesItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
