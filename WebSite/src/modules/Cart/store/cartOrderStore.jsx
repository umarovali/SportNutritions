import { create } from 'zustand';

const LOCAL_STORAGE_KEY = 'orderProducts';

const getInitialProducts = () => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const cartOrderStore = create((set) => ({
  orderProducts: getInitialProducts(),

  setOrderProducts: (updater) => {
    set((state) => {
      const updated =
        typeof updater === "function" ? updater(state.orderProducts) : updater;

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));

      return { orderProducts: updated };
    });
  },

  clearOrderProducts: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    set({ orderProducts: [] });
  },
}));

export default cartOrderStore;