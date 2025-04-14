import { useEffect, useRef, useState } from "react";
import api from "../../../../utils/axiosInstance";
import { FaUserEdit } from "react-icons/fa";
import { TbAddressBook } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
import AvatarFoto from "../../../../assets/images/avatar.avif";
import toast from "react-hot-toast";

export default function ProfileEdit({ modal, setModal, setUser, user }) {
    const [userData, setUserData] = useState();
    const fileInputRef = useRef();
    const elOverlay = useRef();

    const handleCloseModal = (evt) => {
        if (evt.target === elOverlay.current) {
            setModal(!modal);
        }
    };

    useEffect(() => {
        function closeModal(evt) {
            if (evt.code === "Escape") {
                setModal(!modal);
            }
        }

        if (!modal) {
            window.addEventListener("keyup", closeModal);
        }

        return () => window.removeEventListener("keyup", closeModal);
    }, [modal]);

    useEffect(() => {
        api.get("/user/me/")
            .then((data) => setUserData(data.data))
            .catch((err) => console.log(err));
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUserData((prev) => ({ ...prev, avatar: e.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();

        api.put("/user/me/", userData)
            .then(() => {
                setModal(!modal)
                toast.success("Изменения прошло успешно!");
                setUser(user)
            })
    }

    return (
        <div
            onClick={handleCloseModal}
            ref={elOverlay}
            className={`${modal ? "hidden" : ""} flex p-[30px] bg-[#0000002c] fixed w-[100%] h-[100%] left-0 top-0 z-[1000] cursor-pointer`}
        >
            <div className="bg-[#Fff] rounded-[12px] w-full shadow-[2px_2px_5px_0_rgba(0,0,0,0.25)] p-[20px] overflow-y-scroll">
                <div className="flex justify-between">
                    <h2 className="text-[24px] font-[400] font-golos text-[#1e1e1e]">Профиль</h2>
                    <button onClick={() => setModal(!modal)} className="bg-[#CF2516] w-[35px] h-[35px] rounded-full text-[28px] text-[#FFF] flex items-center justify-center">&times;</button>
                </div>
                <form onSubmit={handleFormSubmit} className="mt-[20px]">
                    <div className="w-[200px] h-[200px] rounded-[50%]  shadow-[2px_2px_5px_0_rgba(0,0,0,0.25)] m-auto cursor-pointer">
                        <img
                            className="w-[100%] h-[100%] object-cover rounded-[50%]"
                            src={userData?.avatar || AvatarFoto}
                            alt="Avatar"
                            onClick={() => fileInputRef.current.click()}
                        />
                        <input
                            ref={fileInputRef}
                            className="hidden"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div className="mt-[15px]">
                        <label for="username" className="cursor-pointer text-[18px] font-[400] font-golos text-[#1e1e1e]">Имя пользователя</label>
                        <div className="flex relative">
                            <FaUserEdit className="absolute right-[5px] top-[14px] text-[22px] font-[400] font-golos text-[#313131]" />
                            <input
                                id="username"
                                onChange={(e) => setUserData((prev) => ({ ...prev, username: e.target.value }))}
                                className="w-[100%] h-[40px] mt-[5px] border-[1px] border-[#A29E9E] rounded-[5px] pl-[10px] font-openSans text-[#1e1e1e] text-[20px] font-[400] outline-none"
                                type="text"
                                value={userData?.username || ""}
                            />
                        </div>
                    </div>
                    <div className="mt-[15px]">
                        <label for="phone_number" className="cursor-pointer text-[18px] font-[400] font-golos text-[#1e1e1e]">Номер телефона</label>
                        <div className="flex relative">
                            <FaPhone className="absolute right-[7px] top-[16px] text-[19px] font-[400] font-golos text-[#313131]" />
                            <input
                                id="phone_number"
                                onChange={(e) => setUserData((prev) => ({ ...prev, phone_number: e.target.value }))}
                                className="w-[100%] h-[40px] mt-[5px] border-[1px] border-[#A29E9E] rounded-[5px] pl-[10px] font-openSans text-[#1e1e1e] text-[20px] font-[400] outline-none"
                                type="text"
                                value={userData?.phone_number || ""}
                            />
                        </div>
                    </div>

                    <div className="mt-[15px]">
                        <label fro="date" className="cursor-pointer text-[18px] font-[400] font-golos text-[#1e1e1e]">Дата рождения</label>
                        <input
                            id="date"
                            onChange={(e) => setUserData((prev) => ({ ...prev, birth_date: e.target.value }))}
                            className="w-[100%] h-[40px] mt-[5px] border-[1px] border-[#A29E9E] rounded-[5px] pl-[10px] font-openSans text-[#1e1e1e] text-[20px] font-[400] outline-none"
                            type="date"
                            value={userData?.birth_date || ""}
                        />
                    </div>

                    <div className="mt-[15px]">
                        <label for="gender" className="cursor-pointer text-[18px] font-[400] font-golos text-[#1e1e1e]">Пол</label>
                        <select
                            id="gender"
                            onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                            value={userData?.gender || "unspecified"}
                            className="w-[100%] h-[40px] mt-[5px] border-[1px] border-[#A29E9E] rounded-[5px] pl-[10px] font-openSans text-[#1e1e1e] text-[20px] font-[400] outline-none"
                        >
                            <option value="unspecified">Не указан</option>
                            <option value="male">Мужчина</option>
                            <option value="female">Женщина</option>
                        </select>
                    </div>

                    <div className="mt-[15px]">
                        <label for="addres" className="cursor-pointer text-[18px] font-[400] font-golos text-[#1e1e1e]">Адрес</label>
                        <div className="flex relative">
                            <TbAddressBook className="absolute right-[5px] top-[14px] text-[22px] font-[400] font-golos text-[#313131]" />
                            <input
                                id="addres"
                                onChange={(e) => setUserData((prev) => ({ ...prev, address: e.target.value }))}
                                className="w-[100%] h-[40px] mt-[5px] border-[1px] border-[#A29E9E] rounded-[5px] pl-[10px] font-openSans text-[#1e1e1e] text-[20px] font-[400] outline-none"
                                type="text"
                                placeholder="Укажите адрес"
                                value={userData?.address || ""}
                            />
                        </div>
                    </div>

                    <div className="mt-[15px]">
                        <label for="password" className="cursor-pointer text-[18px] font-[400] font-golos text-[#1e1e1e]">Пароль</label>
                        <div className="flex relative">
                            <RiLockPasswordLine className="absolute right-[5px] top-[14px] text-[22px] font-[400] font-golos text-[#313131]" />
                            <input
                                id="password"
                                onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
                                className="w-[100%] h-[40px] mt-[5px] border-[1px] border-[#A29E9E] rounded-[5px] pl-[10px] font-openSans text-[#1e1e1e] text-[20px] font-[400] outline-none"
                                type="password"
                                placeholder="Введите пароль"
                            />
                        </div>
                    </div>

                    <center>
                        <button type="submit" className="w-[90%] mt-[20px] text-[22px] bg-[#CF2516] px-[4px] py-[5px] rounded-[4px] text-[#fff]">Сохранить</button>
                    </center>
                </form>
            </div>
        </div>
    );
}