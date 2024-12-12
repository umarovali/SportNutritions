import api from "../utils/axiosInstance";
import { create } from 'zustand';
import ErrorPage from "../components/ErrorPage/ErrorPage";
import LoadingPage from "../components/LoadingPage/LoadingPage";

const useNutrition = create((set) => ({
    data: null,
    isLoading: false,
    isError: null,
    fetchData: () => {
        set({ isLoading: <LoadingPage />, isError: null });
        api
            .get("/nutrition/")
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

export default useNutrition;
