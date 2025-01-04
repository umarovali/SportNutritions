import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/axiosInstance";
import SingleFoto from "./Components/SingleFoto";
import SingleContent from "./Components/SingleContent";
import SingleCatalog from "./Components/SingleCatalog";
import SingleInfo from "./Components/SingleInfo";
import SingleHeader from "./Components/SingleHeader";

export default function SingleProduct({ }) {
    const { id } = useParams()
    const [single, setSingle] = useState([]);
    const queryParams = new URLSearchParams(location.search);
    const url = queryParams.get("url");

    useEffect(() => {
        api(`${url}/${id}`)
            .then(data => setSingle(data.data)
            )
    }, [])

    return (
        <>
            <SingleHeader videoUrl={single?.video} />
            <SingleFoto images={single?.image} />
            <SingleContent name={single.name} description={single.description} price={single?.price} />
            <SingleCatalog catalog={single} />
            {url === "accessories" ? null :
                <SingleInfo info={single?.extra_info} />}
        </>
    )
}
