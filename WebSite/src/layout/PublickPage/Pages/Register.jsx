import { FaEyeSlash, FaPersonWalkingArrowRight } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import FotoBg from "../../../assets/images/LoginFoto.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import api from "../../../utils/axiosInstance";
import toast from "react-hot-toast";
import ModalConfirm from "../Components/ModalConfirm";

export default function Register() {
    const [modal, setModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const elUsername = useRef()
    const elPhoneNumber = useRef()
    const elPassword = useRef()
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault()

        const requestBody = {
            username: elUsername.current.value,
            phone_number: elPhoneNumber.current.value,
            password: elPassword.current.value,
        }

        api.post("user/signup/", requestBody)
            .then((res) => {
                toast.success("Регистрация прошло успещно!")
                setModal(!modal)
                setTimeout(() => {
                    navigate("/login")
                }, 500)
                setTimeout(() => {
                    toast.success("Теперь войдите в созданный аккаунт!")
                }, 2500)
            })
            .catch((err) => {
                toast.error("Ошибка регистрации. Попробуйте снова.")
            })
    }

    const handleOpenModal = (evt) => {
        evt.preventDefault()
        if (elUsername.current.value.length && elPhoneNumber.current.value.length && elPassword.current.value.length) {
            setModal(!modal)
        } else {
            toast.error("Заполните все поля!")
        }
    }




    return (
        <>
            <div className="bg-[#000] relative w-full h-[100svh]">
                <div className="inset-0">
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
                    <form onSubmit={handleOpenModal} className="w-[80%] pt-[40px] flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-openSans text-start text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Имя</label>
                            <input ref={elUsername} className="w-[100%] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-[10px] pl-[10px] font-golos text-[#fff] text-[16px]" placeholder="Имя..." type="text" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <label className="font-openSans text-start text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Номер телефона</label>
                            <div className="flex">
                                <div className=" bg-transparent border-[1px] border-[#fff] rounded-l-[10px] px-[8px] border-r-[0px] flex items-center justify-center font-golos text-[#fff] text-[16px]">+996</div>
                                <input ref={elPhoneNumber} className="w-[100%] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-r-[10px] pl-[10px]  font-golos text-[#fff] text-[16px]" placeholder="Номер телефона..." type="tel"
                                    maxLength="9"
                                    onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 9)} />
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
                                Регистрация
                                <FaPersonWalkingArrowRight className="text-[21px]" />
                            </span>
                        </button>

                        <p className="font-golos text-[13px] text-white">
                            Уже есть аккаунт?{" "}
                            <Link to="/login" className="underline font-medium text-white">
                                Войдите
                            </Link>, чтобы <br /> продолжить.
                        </p>
                    </form>
                </div>

            </div>

            <ModalConfirm modal={modal} setModal={setModal} handleSubmitForm={handleSubmitForm} />
        </>
    )
}