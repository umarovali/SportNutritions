import { useEffect } from "react";
import { useParams } from "react-router-dom"
import api from "../../utils/axiosInstance";
export default function Products() {
    const { filter } = useParams();

    console.log(filter);

    useEffect(() => {
        api(`/nutrition/?${filter}=2`)
        .then(data => console.log(data)
        )
    },[])
    
    return (
        <section>
            <div className="container">
                <ul className='grid grid-cols-2 gap-x-[15px] mt-[16px] mb-[100px]'>
                    {/* {data?.map((item) => (
                        <ProductItem requestText={requestText} key={item.id} item={item} />
                    ))} */}
                </ul>
            </div>
        </section>
    )
}
