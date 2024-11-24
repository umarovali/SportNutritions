import { create } from "zustand";
import api from "../utils/axiosInstance";

const useUploadFile = create((set) => ({
    imageUrl: null,
    uploadImage: (file) => {
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        api
            .post("/upload-image/", formData)
            .then((response) => {
                const uploadedImageUrl = response.data.image_url;
                set({ imageUrl: uploadedImageUrl });
            })
            .catch((error) => {
                console.error("Ошибка при загрузке файла:", error);
            });
    },
    resetImageUrl: () => set({ imageUrl: null }),
}));

export default useUploadFile;
