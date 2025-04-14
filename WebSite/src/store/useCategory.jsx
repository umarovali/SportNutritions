import api from "../utils/axiosInstance";
import { create } from 'zustand';

const useCategory = create((set) => ({
    dataCategory: null,
    fetchDataCategory: () => {
        api
            .get("/category/")
            .then((res) => {
                set({ dataCategory: res.data });
            })
            .catch((error) => {});
    },
}));

export default useCategory
