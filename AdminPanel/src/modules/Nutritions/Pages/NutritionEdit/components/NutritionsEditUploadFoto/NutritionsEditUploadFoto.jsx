import { useRef } from "react";
import AddFoto from "../../../../../../assets/images/add_foto.svg";
import { FiMinus } from "react-icons/fi";
import api from "../../../../../../utils/axiosInstance";

export default function NutritionsEditUploadFoto({ images, setImages }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      api
        .post("/upload-image/", formData)
        .then((response) => {
          const uploadedImageUrl = response.data.image_url;
          setImages((prevImages) => [...prevImages, uploadedImageUrl]);
        })
        .catch((error) => {
          console.error("Ошибка загрузки изображения:", error);
        });
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = (index, evt) => {
    evt.preventDefault();
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="flex gap-[20px] items-center overflow-x-auto flex-nowrap py-[12px] px-[12px]">
      {images.map((image, index) => (
        <div key={index} className="relative max-w-[80px] min-w-[80px] h-[80px]">
          <img
            className="w-full h-full object-cover rounded-[5px] shadow-[0px_0px_8px_1px_rgba(0,0,0,0.3)]"
            src={image}
            alt={`Фото ${index + 1}`}
          />
          <button
            type="button"
            onClick={(evt) => handleRemoveImage(index, evt)}
            className="absolute top-[-4px] right-[-4px] bg-red-500 text-white rounded-[50%] text-[14px] box-border p-[4px]"
          >
            <FiMinus />
          </button>
        </div>
      ))}

      <div
        className="max-w-[80px] min-w-[80px] h-[80px] flex items-center justify-center border rounded-[5px] shadow-[0px_0px_8px_1px_rgba(0,0,0,0.3)] cursor-pointer"
        onClick={handleClick}
      >
        <img
          className="w-full h-full object-contain"
          src={AddFoto}
          alt="добавить фото"
        />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  )
}
