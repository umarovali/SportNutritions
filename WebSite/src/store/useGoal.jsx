import api from "../utils/axiosInstance";
import { create } from 'zustand';

const useGoal = create((set) => ({
    dataGoal: null,
    fetchDataGoal: () => {
        api
            .get("/goals/")
            .then((res) => {
                set({ dataGoal: res.data });
            })
            .catch((error) => {});
    },
}));

export default useGoal;
