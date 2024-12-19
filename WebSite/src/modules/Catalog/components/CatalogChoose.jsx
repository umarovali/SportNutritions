import { useEffect } from "react";
import useCatalog from "../../../store/useCatalog";
import CatalogChooseItem from "./CatalogChooseItem";

export default function CatalogChoose({ activeFilter }) {
    const { data, fetchData } = useCatalog()

    useEffect(() => {
        fetchData(`/${activeFilter}/`)
    }, [activeFilter])

    return (
        <section>
            <div className="container">
                <ul className="flex flex-col gap-[16px] mt-[16px] pb-[90px]">
                    {data?.map((item) => (
                        <CatalogChooseItem activeFilter={activeFilter} key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
