import FotoBg from "../../assets/images/LoginFoto.png";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import api from "../../utils/axiosInstance";
import { useRef } from "react";
import toast from "react-hot-toast";
import useTokenStore from "./store/useTokenStore";

export default function Login() {
    const setToken = useTokenStore((state) => state.setToken);
    const elUserName = useRef();
    const elPassword = useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const formData = {
            username: elUserName.current.value,
            password: elPassword.current.value,
        }
        api.post("http://127.0.0.1:8000/api/token/", formData)
            .then((token) => {
                setToken(token.data.access);
                toast.success("Вход выполнен успешно!")
                elUserName.current.value = ""
                elPassword.current.value = ""
            })
    }

    return (
        <div className="bg-[#000] relative w-[100%] h-[100svh]">
            <img className="w-[100%] h-[100svh] z-1000 absolute left-0 top-0 object-cover object-top" src={FotoBg} alt="Login" />
            <h1 className="font-golos relative text-[#fff] text-[32px] tracking-[3px] pt-[44px] text-center font-bold">Sport <span className="text-[#CF2516]">Nutritions</span></h1>

            <form onSubmit={handleSubmit} className="relative px-[40px] pt-[30%] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <label className="font-openSans relative text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Имя</label>
                    <input ref={elUserName} className="w-[100%] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-[10px] pl-[10px] font-golos text-[#fff] text-[16px]" placeholder="Имя..." type="text" />
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
