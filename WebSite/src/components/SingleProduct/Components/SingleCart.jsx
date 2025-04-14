import { LiaCartPlusSolid } from "react-icons/lia";
import { BsCartDash } from "react-icons/bs";
import useCartProduct from "../../../store/useCartProduct";
import { useEffect } from "react";
import api from "../../../utils/axiosInstance";

export default function SingleCart({ productid, requestText }) {
    const { dataCartProduct, fetchCartProduct } = useCartProduct();
    const token = localStorage.getItem("access_token");

    useEffect(() => {
        fetchCartProduct(requestText);
    }, []);


    const key = requestText;
    const inCartItem = dataCartProduct?.find(item => item?.nutritions?.id == productid);
    const isInCart = Boolean(inCartItem);

    console.log(isInCart);




    const handleToggleCart = (e) => {
        e.preventDefault();

        const productKey = `${requestText}_id`;
        const headers = {
            Authorization: `Bearer ${JSON.parse(token)}`
        };

        const url = `${requestText}/cart/`;

        if (isInCart) {
            api.delete(`${url}${productid}/`, { headers })
                .then(() => fetchCartProduct(requestText))
                .catch(err => console.error("Ошибка удаления:", err));
        } else {
            api.post(url, { [productKey]: productid, quantity: 1 }, { headers })
                .then(() => fetchCartProduct(requestText))
                .catch(err => console.error("Ошибка добавления:", err));
        }
    };

    return (
        <section className="mb-[200px] mt-[20px]">
            <div className="container">
                <button
                    onClick={handleToggleCart}
                    className="w-[100%] text-white bg-[#CF2516] rounded-full p-[12px] duration-[0.4s] shadow-[0_0_10px_0_rgba(207,37,22,0.75)] flex justify-center gap-3 items-center"
                >
                    {isInCart ? "Удалить из корзины" : "Добавить в корзину"}
                    {isInCart ? <BsCartDash className="text-[30px]" /> : <LiaCartPlusSolid className="text-[30px]" />}
                </button>
            </div>
        </section>
    );
}