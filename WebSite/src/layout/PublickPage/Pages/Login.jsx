import { FaEyeSlash, FaPersonWalkingArrowRight } from "react-icons/fa6";
import FotoBg from "../../../assets/images/LoginFoto.png";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { useRef } from "react";
import api from "../../../utils/axiosInstance";
import toast from "react-hot-toast";
import useTokenStore from "../store/useTokenStore";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const elPhoneNumber = useRef();
    const elPassword = useRef();
    const setToken = useTokenStore((state) => state.setToken);


    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();

        const requestBody = {
            phone_number: elPhoneNumber.current.value,
            password: elPassword.current.value,
        }

        api.post("/user/login/", requestBody)
            .then((token) => {
                if (token.data.token.role !== "super-admin") {
                    api.post("/user/login/refresh/", { refresh: token.data.token.refresh })
                        .then((access) => {
                            setToken(access.data.access);
                            toast.success("Вход выполнен успешно!");
                            elPhoneNumber.current.value = "";
                            elPassword.current.value = "";
                        })
                } else {
                    toast.error("Ошибка при заполнении поля!");
                }
            })
            .catch((err) => {
                switch (err.message) {
                    case "Invalid phone number or password":
                        toast.error("Ошибка при заполнении поля!");
                        break;
                }
            });
    }



    return (
        <div className="bg-[#000] relative w-full h-[100svh]">
            <div className=" inset-0">
                <img
                    src={FotoBg}
                    alt="Login"
                    className="absolute w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="font-grechen text-[36px] text-white tracking-[3px] font-bold">
                    Sport <span className="text-[#CF2516]">Nutritions</span>!
                </h1>
                <form onSubmit={handleSubmitForm} className="w-[80%] pt-[40px] flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-openSans text-start text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Номер телефона</label>
                        <div className="flex">
                            <div className=" bg-transparent border-[1px] border-[#fff] rounded-l-[10px] px-[8px] border-r-[0px] flex items-center justify-center font-golos text-[#fff] text-[16px]">+996</div>
                            <input ref={elPhoneNumber} className="w-[100%] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-r-[10px] pl-[10px]  font-golos text-[#fff] text-[16px]" placeholder="Номер телефона..." type="tel" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-openSans text-start text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Пароль</label>
                        <div className="flex gap-[0px]">
                            <input ref={elPassword} className="w-[100%] h-[45px] bg-transparent border-[1px] border-r-[0px] border-[#fff] rounded-l-[10px] pl-[10px]  font-golos text-[#fff] text-[16px]" placeholder="Пароль..."
                                type={showPassword ? "text" : "password"}
                            />
                            <div onClick={togglePasswordVisibility} className="flex items-center px-[8px] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-[10px] font-golos rounded-l-[0px] text-[#fff] text-[16px] cursor-pointer">
                                {showPassword ? <FaEyeSlash className="text-[26px]" /> : <IoEyeSharp className="text-[26px]" />}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="font-golos border-b-[1px] border-b-[#ffffffcf] px-[10px] m-auto text-[#ffffffcf] text-[18px] tracking-[1px] text-center font-bold">
                        <span className="flex justify-center items-center gap-[10px]">
                            Войти
                            <FaPersonWalkingArrowRight className="text-[21px]" />
                        </span>
                    </button>

                    <p className="font-golos text-[#fff] text-[13px]">
                        Впервые у нас?{" "}
                        <Link to="/register" className="underline font-medium text-white">
                            Зарегистрируйтесь
                        </Link>, и <br /> начните покупку сейчас!
                    </p>
                </form>
            </div>

        </div>
    )
}