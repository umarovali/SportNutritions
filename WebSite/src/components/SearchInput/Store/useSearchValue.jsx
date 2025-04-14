import { create } from "zustand";

const useSearchValue = create((set) => ({
    searchValue: "",
    setSearchValue: (value) => set({ searchValue: value }),
}));

export default useSearchValue;