import { create } from "zustand";

const useTokenStore = create((set) => ({
    token: JSON.parse(localStorage.getItem("refresh_token")) || "",
    setToken: (value) => {
        if (value) {
            localStorage.setItem("refresh_token", JSON.stringify(value));
            set({ token: value });
        } else {
            localStorage.removeItem("refresh_token");
            set({ token: "" });
        }
    }
}));

export default useTokenStore;
