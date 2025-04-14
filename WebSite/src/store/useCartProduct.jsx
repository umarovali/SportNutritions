import api from "../utils/axiosInstance";
import { create } from 'zustand';
const token = localStorage.getItem("access_token");

const useCartProduct = create((set) => ({
    dataCartProduct: [],
    fetchCartProduct: (requestText) => {
        api
            .get(`${requestText}/cart/`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            })
            .then((res) => {
                set({ dataCartProduct: res.data });
            })
            .catch((error) => { });
    },
}));

export default useCartProduct;
