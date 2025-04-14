import api from "../utils/axiosInstance";
import { create } from 'zustand';

const useBrand = create((set) => ({
    dataBrand: null,
    fetchDataBrand: () => {
        api
            .get("/brand/")
            .then((res) => {
                set({ dataBrand: res.data });
            })
            .catch((error) => {});
    },
}));

export default useBrand;
