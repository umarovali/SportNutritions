import api from "../utils/axiosInstance";
import { create } from 'zustand';
import ErrorPage from "../components/ErrorPage/ErrorPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";

const useCatalog = create((set) => ({
    data: null,
    isLoading: false,
    isError: null,

    fetchData: (url) => {
        set({ isLoading: <LoadingPage />, isError: null });
        api
            .get(url)
            .then((res) => {
                set({ data: res.data, isLoading: false });
            })
            .catch((error) => {
                set({
                    isError: <ErrorPage />,
                    isLoading: false,
                });
            });
    },
}));

export default useCatalog;
