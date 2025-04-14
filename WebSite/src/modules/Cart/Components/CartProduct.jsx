import { useEffect } from "react";
import CartProductItem from "./CartProductItem";
import api from "../../../utils/axiosInstance";
import useCartProduct from "../../../store/useCartProduct";

export default function CartProduct({ requestText }) {
    const { dataCartProduct, fetchCartProduct } = useCartProduct()

    useEffect(() => {
        fetchCartProduct(requestText)
    }, [requestText])


    return (
        <section>
            <div className="container">
                <ul className="flex flex-col gap-[20px] mt-[20px]">
                    {dataCartProduct.map((item) => (
                        <CartProductItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
