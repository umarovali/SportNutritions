import api from "../utils/axiosInstance";
import { create } from 'zustand';

const useCartProduct = create((set) => ({
    dataCartProduct: [],
    fetchCartProduct: (requestText) => {
        api
            .get(`${requestText}/cart/`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`,
                },
            })
            .then((res) => {
                set({ dataCartProduct: res.data });
            })
            .catch((error) => { });
    },
}));

export default useCartProduct;
