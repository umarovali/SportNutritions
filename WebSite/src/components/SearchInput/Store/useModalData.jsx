import { create } from 'zustand';

const useModalData = create((set) => ({
    modalData: {
        minPrice: "",
        maxPrice: "",
        category: "",
        brand: "",
        goal: ""
    },
    setModalData: (data) => set({ modalData: data }),
}));

export default useModalData;
