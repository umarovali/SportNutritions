import { IoCloseCircleSharp } from "react-icons/io5";
import { useRef, useState, useEffect } from "react";
import api from "../../../../utils/axiosInstance";
import toast from "react-hot-toast";
import useUploadFile from "../../../../store/uploadFile";
import useCatalog from "../../../../store/useCatalog";

export default function ModalEdit({ handleOpenModal, item, request }) {
    const { id, name, image } = item;
    const fileInputRef = useRef(null);
    const nameRef = useRef(null);
    const { imageUrl, uploadImage, resetImageUrl } = useUploadFile();
    const [currentImageUrl, setCurrentImageUrl] = useState(image);
    const [currentName, setCurrentName] = useState(name);
    const [isChanged, setIsChanged] = useState(false);
    const { fetchData } = useCatalog();

    useEffect(() => {
        setCurrentImageUrl(imageUrl || image);
    }, [imageUrl, image]);

    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadImage(file);
            setIsChanged(true);
        }
    };

    const handleNameChange = () => {
        if (nameRef.current.value !== currentName) {
            setIsChanged(true)
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!isChanged) {
            handleOpenModal();
            return;
        }

        const formData = {
            image: currentImageUrl,
            name: nameRef.current.value,
        };

        api.put(`${request}/${id}/`, formData)
            .then((res) => {
                toast.success("Успешно обновлено!");
                fetchData(`/${request}/`);
                handleOpenModal();
                resetImageUrl();
            })
            .catch((error) => {
                if (error.response) {
                    const { message } = error.response.data;
                    if (message) {
                        toast.error(message);
                    }
                }
            });
    };

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
                        Изменить
                    </h2>
                    <IoCloseCircleSharp
                        onClick={handleOpenModal}
                        className="text-[#CF2516] text-[38px] cursor-pointer"
                    />
                </div>

                <form onSubmit={handleUpdate}>
                    <div className="flex flex-col gap-[8px] items-center justify-center w-[80%] m-auto cursor-pointer">
                        <img
                            onClick={handleFileInputClick}
                            className="object-cover w-[90%] aspect-square shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]"
                            src={currentImageUrl}
                            alt={name}
                        />
                        <p className="text-[#CF2516] text-[16px] font-golos">Изменить фото</p>
                        <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="flex flex-col gap-[6px] pt-[15px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">
                            Наименование
                        </label>
                        <input
                            ref={nameRef}
                            className="w-[100%] h-[35px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[14px] outline-none"
                            type="text"
                            defaultValue={name}
                            onBlur={handleNameChange}
                        />
                    </div>

                    <center>
                        <button
                            type="submit"
                            className="w-[90%] h-[30px] bg-[#CF2516] rounded-[10px] text-[#FFF] tracking-[1px] font-golos text-[18px] border-[1px] border-[#A29E9E] mt-[15px]"
                        >
                            Изменить
                        </button>
                    </center>
                </form>
            </div>
        </div>
    );
}
