import { useEffect } from "react";
import CartProductItem from "./CartProductItem";
import api from "../../../utils/axiosInstance";
import useCartProduct from "../../../store/useCartProduct";

export default function CartProduct({ requestText }) {
    const { dataCartProduct, fetchCartProduct } = useCartProduct()

    useEffect(() => {
        fetchCartProduct(requestText)
    }, [requestText])

    console.log(dataCartProduct);
    


    return (
        <section>
            <div className="container">
                <ul className="flex flex-col gap-[20px] mt-[20px] z-[-10]">
                    {dataCartProduct.map((item) => (
                        <CartProductItem key={item.id} item={item} requestText={requestText} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
