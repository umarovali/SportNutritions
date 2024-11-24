import ErrorFoto from "../../assets/images/errorFoto.png";

export default function ErrorPage() {
    return (
        <section className="w-[100%] h-[100%] flex items-center justify-center flex-col gap-[10px]">
            <h1 className="text-[70px] font-[900] font-openSans text-[#1e1e1e]">404</h1>
            <img className="w-[200px] h-[280px] object-contain" src={ErrorFoto} alt="" />
            <p className="text-center text-[15px] font-openSans font-[400] text-[#1e1e1e]"><span className="font-[900]">OPS!!!</span> Ошибка при  <br /> соединение сервером!</p>
        </section>
    )
}
