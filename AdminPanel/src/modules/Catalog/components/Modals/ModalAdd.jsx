import { useRef } from "react";
import useUploadFile from "../../../../store/uploadFile";
import addFoto from "../../../../assets/images/add_foto.svg";
import { IoCloseCircleSharp } from "react-icons/io5";
import api from "../../../../utils/axiosInstance";
import toast from "react-hot-toast";
import useCatalog from "../../../../store/useCatalog";

export default function ModalAdd({ handleOpenModal, request }) {
  const fileInputRef = useRef(null);
  const nameRef = useRef(null);
  const { imageUrl, uploadImage, resetImageUrl } = useUploadFile();
  const { fetchData } = useCatalog();

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };


  const handleCreate = (evt) => {
    evt.preventDefault();
    const formData = {
      image: imageUrl,
      name: nameRef.current.value
    }

    api.post(`${request}/create/`, formData)
      .then(res => {
        toast.success("Успешное добавленно!");
        fetchData(`/${request}/`)
        handleOpenModal()
        resetImageUrl()
      })
      .catch(error => {
        if (error.image) toast.error("Выберите фото!")
        if (error.name) toast.error("Заполните поля!")
      })
  }

  return (
    <div
      onClick={handleOpenModal}
      className="bg-[#1e1e1e84] w-[100%] h-[100%] fixed left-0 top-0 z-[1000] flex items-center justify-center"
    >
      <div
        onClick={handleModalClick}
        className="bg-[#fff] px-[20px] py-[10px] rounded-[25px] w-[90%]"
      >
        <div className="flex justify-between items-center pb-[15px]">
          <h2 className="text-[#1e1e1e] text-[20px] font-[600] tracking-[1px]">
            Добавить
          </h2>
          <IoCloseCircleSharp
            onClick={handleOpenModal}
            className="text-[#CF2516] text-[38px] cursor-pointer"
          />
        </div>
        <form onSubmit={handleCreate}>
          <div
            className="flex flex-col gap-[8px] items-center justify-center w-[80%] m-auto cursor-pointer"
            onClick={handleFileInputClick}
          >
            <img
              className="object-cover w-[90%] aspect-square"
              src={imageUrl || addFoto}
              alt="Предпросмотр"
            />
            <p className="text-[#CF2516] text-[16px] font-golos">Добавить фото</p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div className="flex flex-col gap-[6px] pt-[10px]">
            <label className="font-openSans font-[500] text-[#1E1E1E]">
              Наимование
            </label>
            <input
              ref={nameRef}
              className="w-[100%] h-[35px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[14px] outline-none"
              type="text"
            />
          </div>

          <center>
            <button type="submit" className="w-[90%] h-[30px] bg-[#CF2516] rounded-[10px] text-[#FFF] tracking-[1px] font-golos text-[18px] border-[1px] border-[#A29E9E] mt-[15px]">
              Добавить
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}
