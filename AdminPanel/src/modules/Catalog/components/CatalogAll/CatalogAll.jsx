import CategoryAllItem from "./CatalogAllItem";
import { useEffect } from "react";
import useCatalog from "../../../../store/useCatalog";

export default function CatalogAll({ request }) {
    const { data, fetchData, isLoading, isError } = useCatalog();

    useEffect(() => {
        fetchData(`/${request}/`)
    }, []);

    if (isLoading) return isLoading;
    if (isError) return isError;


    return (
        <section>
            <div className="container">
                <ul className="flex flex-col gap-[15px] mt-[15px] pb-[95px]">
                    {data?.map(item => (
                        <CategoryAllItem key={item.id} item={item} request={request} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
