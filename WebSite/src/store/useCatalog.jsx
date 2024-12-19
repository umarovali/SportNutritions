import api from "../utils/axiosInstance";
import { create } from 'zustand';

const useCatalog = create((set) => ({
    data: null,

    fetchData: (url) => {
        api
            .get(url)
            .then((res) => {
                set({ data: res.data });
            })
            .catch((error) => {});
    },
}));

export default useCatalog;
