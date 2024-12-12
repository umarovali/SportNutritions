import { create } from "zustand";
import api from "../utils/axiosInstance";

const useUploadVideo = create((set) => ({
    videoUrl: null,
    uploadVideo: (file) => {
        if (!file) return;

        const formData = new FormData();
        formData.append("video", file);

        api
            .post("/upload-video/", formData)
            .then((response) => {
                const uploadedVideoUrl = response.data.video_url;
                set({ videoUrl: uploadedVideoUrl });
            })
            .catch((error) => {
                console.error("Ошибка при загрузке файла:", error);
            });
    },
    resetVideoUrl: () => set({ videoUrl: null }),
}));

export default useUploadVideo;
