import { useEffect } from "react";
import useNutrition from "../../../../store/useNutrition";
import NutritionAllItem from "./NutritionAllItem";

export default function NutritionAll() {
    const { data, fetchData, isLoading, isError } = useNutrition();

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
                        <NutritionAllItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
