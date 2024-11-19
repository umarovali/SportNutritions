import AddFoto from "../../../../../assets/images/add_foto.svg";

export default function NutritionAddForm() {
    return (
        <section>
            <div className="container">
                <form className='pt-[20px] px-[8px] flex flex-col gap-[8px]'>
                    {/* <div className="flex flex-col gap-[6px] items-center">
                        <img className="w-[100%]" src={AddFoto} alt="Добавит фото" />
                        <p className="text-[#CF2516] font-golos font-[400] text-[12px]">Добавит фото</p>
                    </div> */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Наимование</label>
                        <input className="w-[100%] h-[35px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[14px] outline-none" type="text" />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Описание</label>
                        <textarea className="w-[100%] h-[150px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[17px] font-[400] p-[14px] outline-none" type="text" />
                    </div>

                    <div className="grid grid-cols-2 gap-[10px]">
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Категория</label>
                            <button className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]">Выбрать</button>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Цена</label>
                            <input className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] pl-[14px] outline-none" type="number" />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Бренд</label>
                            <button className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]">Выбрать</button>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <label className="font-openSans font-[500] text-[#1E1E1E]">Цель</label>
                            <button className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]">Выбрать</button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[6px]">
                        <label className="font-openSans font-[500] text-[#1E1E1E]">Информация</label>
                        <div className="overflow-hidden rounded-[5px] border-[1px] border-b-[0px] border-[#A29E9E]">
                            <table className="w-full">
                                <tr className="grid grid-cols-2 border-b-[1px] border-[#A29E9E]">
                                    <td className="border-r-[1px] border-[#A29E9E]">
                                        <input className="w-full h-[28px] font-openSans text-[#A29E9E] text-[14px] font-[400] px-[8px] outline-none" type="text" />
                                    </td>
                                    <td>
                                        <input className="w-full h-[28px] font-openSans text-[#A29E9E] text-[14px] font-[400] px-[8px] outline-none" type="text" />
                                    </td>
                                </tr>
                                <tr className="grid grid-cols-2 border-b-[1px] border-[#A29E9E]">
                                    <td className="border-r-[1px] border-[#A29E9E]">
                                        <input className="w-full h-[28px] font-openSans text-[#A29E9E] text-[14px] font-[400] px-[8px] outline-none" type="text" />
                                    </td>
                                    <td>
                                        <input className="w-full h-[28px] font-openSans text-[#A29E9E] text-[14px] font-[400] px-[8px] outline-none" type="text" />
                                    </td>
                                </tr>
                                <tr className="grid grid-cols-2 border-b-[1px] border-[#A29E9E]">
                                    <td className="border-r-[1px] border-[#A29E9E]">
                                        <button className="w-[100%] h-[30px] font-openSans text-[#1e1e1e] text-[16px] tracking-[1px] font-[500]">Доб - Столб</button>
                                    </td>
                                    <td>
                                        <button className="w-[100%] h-[30px] font-openSans text-[#1e1e1e] text-[16px] tracking-[1px] font-[500]">От - Столб</button>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )
}
