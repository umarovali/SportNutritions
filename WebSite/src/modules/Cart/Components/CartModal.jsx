import Foto from "../../../assets/images/FotoProduct.png";

export default function CartModal() {
    return (
        <section className="flex p-[30px] bg-[#00000041] fixed w-[100%] h-[100%] left-0 top-0 z-[1000] cursor-pointer justify-center items-center">
            <div className="bg-[#Fff] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)] w-full rounded-[30px] p-[20px] h-[400px]">
                <h2 className="font-grechen text-[24px] text-black tracking-[3px] font-bold text-center">
                    Sport <span className="text-[#CF2516]">Nutritions</span>!
                </h2>

                <ul>
                    <li className='rounded-[10px] even:mt-[16px] odd:mb-[16px] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer'>
                        <img
                            className="w-full h-full object-cover rounded-t-[10px]"
                            src={Foto} alt="" />
                        <div className="pt-[4px] pb-[6px] px-[12px]">
                            <h3 className="text-[#1E1E1E] font-openSans text-[11px] font-[700] truncate">adasdsa</h3>
                            <p className="text-[8.5px] font-openSans tracking-[0.5px] leading-[11px] font-[400] line-clamp-3">asdas djkldasasdfj sal;df saldkfasd;f</p>
                            <div className="pt-[4px] flex justify-between items-center">
                                <p className="text-[10px] text-[#CF2516] font-[600]">
                                    Цена: <span className="text-[#1E1E1E] font-[400] tracking-[0.4px]">32321 сом</span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
