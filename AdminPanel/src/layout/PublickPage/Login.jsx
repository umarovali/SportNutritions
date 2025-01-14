import FotoBg from "../../assets/images/LoginFoto.png";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import api from "../../utils/axiosInstance";
import { useRef } from "react";
import toast from "react-hot-toast";
import useTokenStore from "./store/useTokenStore";

export default function Login() {
    const setToken = useTokenStore((state) => state.setToken);
    const elPhoneNumber = useRef();
    const elPassword = useRef();

    const handlePhoneInput = (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 9);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const formData = {
            phone_number: elPhoneNumber.current.value,
            password: elPassword.current.value,
        }
        api.post("/user/login/", formData)
            .then((token) => {
                setToken(token.data.token.access);
                toast.success("Вход выполнен успешно!")
                elPhoneNumber.current.value = ""
                elPassword.current.value = ""
            })
            .catch((err) => {
                switch (err.message) {
                    case "Invalid phone number or password":
                        toast.error("Ошибка при заполнение поля!")
                }
            })
    }

    return (
        <div className="bg-[#000] relative w-[100%] h-[100svh]">
            <img className="w-[100%] h-[100svh] z-1000 absolute left-0 top-0 object-cover object-top" src={FotoBg} alt="Login" />
            <h1 className="font-golos relative text-[#fff] text-[32px] tracking-[3px] pt-[44px] text-center font-bold">Sport <span className="text-[#CF2516]">Nutritions</span></h1>

            <form onSubmit={handleSubmit} className="relative px-[40px] pt-[30%] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <label className="font-openSans relative text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Номер телефона</label>
                    <div className="flex gap-[0px]">
                        <div className="flex items-center px-[8px] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-[10px] font-golos rounded-r-[0px] text-[#fff] text-[16px]">+996</div>
                        <input ref={elPhoneNumber} onInput={handlePhoneInput} className="w-[100%] h-[45px] bg-transparent border-[1px] border-l-0 border-[#fff] rounded-r-[10px] pl-[10px] font-golos text-[#fff] text-[16px]" placeholder="Номер телефона..." type="text" />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-openSans relative text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Пароль</label>
                    <input ref={elPassword} className="w-[100%] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-[10px] pl-[10px]  font-golos text-[#fff] text-[16px]" placeholder="Пароль..." type="password" />
                </div>
                <button type="submit" className="relative font-golos border-b-[1px] border-b-[#ffffffcf] w-[105px] m-auto text-[#ffffffcf] text-[18px] tracking-[1px] text-center font-bold">
                    <span className="flex justify-center items-center gap-[10px]">
                        Войти
                        <FaPersonWalkingArrowRight className="text-[21px]" />
                    </span>
                </button>
            </form>
        </div>
    )
}
