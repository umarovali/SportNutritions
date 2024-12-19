import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import FotoBg from "../../../assets/images/LoginFoto.png";
import { Link } from "react-router-dom";

export default function Login() {
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
                    Sport <span className="text-[#CF2516]">Nutrition</span>!
                </h1>
                <form className="w-[80%] pt-[40px] flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-openSans text-start text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Имя</label>
                        <input className="w-[100%] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-[10px] pl-[10px] font-golos text-[#fff] text-[16px]" placeholder="Имя..." type="text" />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-openSans text-start text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Номер телефона</label>
                        <div className="flex">
                            <div className=" bg-transparent border-[1px] border-[#fff] rounded-l-[10px] px-[8px] border-r-[0px] flex items-center justify-center font-golos text-[#fff] text-[16px]">+996</div>
                            <input className="w-[100%] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-r-[10px] pl-[10px]  font-golos text-[#fff] text-[16px]" placeholder="Номер телефона..." type="tel" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-openSans text-start text-[#ffffffcf] text-[18px] tracking-[1px] font-extrabold">Пароль</label>
                        <input className="w-[100%] h-[45px] bg-transparent border-[1px] border-[#fff] rounded-[10px] pl-[10px]  font-golos text-[#fff] text-[16px]" placeholder="Пароль..." type="password" />
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