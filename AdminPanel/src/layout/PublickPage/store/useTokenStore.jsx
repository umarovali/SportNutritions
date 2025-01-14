import { create } from "zustand";

const useTokenStore = create((set) => ({
    token: JSON.parse(localStorage.getItem("access_token")) || "",
    setToken: (value) => {
        if (value) {
            localStorage.setItem("access_token", JSON.stringify(value));
            set({ token: value });
        } else {
            localStorage.removeItem("access_token");
            set({ token: "" });
        }
    }
}));

export default useTokenStore;
