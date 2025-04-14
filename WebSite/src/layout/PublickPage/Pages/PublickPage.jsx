import { Link } from "react-router-dom";
import FotoBg from "../../../assets/images/LoginFoto.png";
import { PiArrowBendDoubleUpRightFill } from "react-icons/pi";

export default function PublickPage() {
    return (
        <div className="relative w-full h-[100svh] bg-black">
            <div className=" inset-0">
                <img
                    src={FotoBg}
                    alt="Login"
                    className="absolute w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
                <h1 className="font-grechen text-[36px] text-white tracking-[3px] font-bold">
                    Sport <span className="text-[#CF2516]">Nutritions</span>!
                </h1>
                <p className="font-openSans text-[#dcdcdc] text-[18px] tracking-[2px] mt-8 leading-relaxed">
                    Мы предлагаем широкий выбор спортивного питания, одежды и аксессуаров для вашего активного образа жизни. Найдите всё необходимое для тренировок в одном месте!
                </p>
                <button className="font-golos space-y-4 mt-[24px]  border-b-[1px] border-b-[#ffffffcf] px-[15px] text-[#ffffffcf] text-[18px] tracking-[1px] text-center font-bold">
                    <Link to={"/register"} className="flex justify-center items-center gap-[10px]">
                        Начать
                        <PiArrowBendDoubleUpRightFill className="text-[21px]" />
                    </Link>
                </button>
            </div>
        </div>
    );
}
