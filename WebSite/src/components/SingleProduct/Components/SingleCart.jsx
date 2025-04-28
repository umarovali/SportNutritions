import { LiaCartPlusSolid } from "react-icons/lia";
import { BsCartDash } from "react-icons/bs";
import useCartProduct from "../../../store/useCartProduct";
import { useEffect } from "react";
import api from "../../../utils/axiosInstance";
import { toast } from "react-hot-toast";

export default function SingleCart({ productid, requestText }) {
    const { dataCartProduct, fetchCartProduct } = useCartProduct();
    const token = localStorage.getItem("access_token");

    useEffect(() => {
        fetchCartProduct(requestText);
    }, []);

    const newRequestText = requestText === "nutrition" ? "nutritions" : "accessories"


    const inCartItem = dataCartProduct?.find(item => item?.[newRequestText]?.id == productid);
    const isInCart = Boolean(inCartItem);




    const handleToggleCart = (e) => {
        e.preventDefault();

        const productKey = `${requestText}_id`;
        const headers = {
            Authorization: `Bearer ${JSON.parse(token)}`
        };

        const url = `${requestText}/cart/`;

        if (isInCart) {
            api.delete(`${url}${productid}/`, { headers })
                .then(() => fetchCartProduct(requestText), toast.error("Успешно удалено!"))
                .catch(err => console.error("Ошибка удаления:", err));
        } else {
            api.post(url, { [productKey]: productid, quantity: 1 }, { headers })
                .then(() => fetchCartProduct(requestText), toast.success("Успешно добавлено!"))
                .catch(err => console.error("Ошибка добавления:", err));
        }
    };

    return (
        <section className="mt-[20px] fixed left-[50%] bottom-[85px] z-40 w-[85%] translate-x-[-50%]">
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