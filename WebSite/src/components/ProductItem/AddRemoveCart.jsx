import { BsCartCheck, BsCartDash } from "react-icons/bs";
import api from "../../utils/axiosInstance";
import { useEffect } from "react";
import useCartProduct from "../../store/useCartProduct";

export default function AddRemoveCart({ productid, requestText }) {
    const { dataCartProduct, fetchCartProduct } = useCartProduct()
    const token = localStorage.getItem("access_token");

    useEffect(() => {
        fetchCartProduct(requestText)
    }, []);

    const isInCart = dataCartProduct.some(item => {
        const values = Object.values(item);
        return values.some(val => val?.id === productid);
    });

    const handleAddCart = (e, id) => {
        e.preventDefault();

        const product = requestText + "_id"

        api.post(`${requestText}/cart/`, { [product]: id, quantity: 1 }, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
            .then((data) => {
                fetchCartProduct(requestText)
            })
            .catch(err => console.error("Ошибка добавления:", err));
    };

    const handleRemoveCart = (e, id) => {
        e.preventDefault();
        api.delete(`${requestText}/cart/${id}/`, {
            headers: { Authorization: `Bearer ${JSON.parse(token)}` }
        })
            .then((data) => {
                fetchCartProduct(requestText)
            })
            .catch(err => console.error("Ошибка удаления:", err));
    };

    return (
        <>
            {isInCart ? (
                <button
                    onClick={(e) => handleRemoveCart(e, productid)}

                    className="w-[20px] h-[20px] rounded-[2px] border-[1px] border-[#CF2516] text-[#fff] bg-[#CF2516] flex items-center justify-center p-[2px]"
                >
                    <BsCartDash className="pt-[1px] text-[20px]" />
                </button>
            ) : (
                <button
                    onClick={(e) => handleAddCart(e, productid)}
                    className="w-[20px] h-[20px] rounded-[2px] border-[1px] border-[#CF2516] text-[#CF2516] flex items-center justify-center p-[2px]"
                >
                    <BsCartCheck className="pt-[1px] text-[20px]" />
                </button>
            )}
        </>
    );
}