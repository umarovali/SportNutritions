import { useState } from "react"

export default function SearchChoose({ choose, setChoose }) {

    return (
        <section>
            <div className="container">
                <div className="flex border-[1px] mt-[16px] bg-transparent border-[#1E1E1E] rounded-[15px] w-[100%] h-[32px]">
                    <button
                        onClick={() => setChoose(false)}
                        className={`w-[50%] rounded-[15px] font-openSans text-[17px] font-[600] flex items-center justify-center tracking-[0.8px] transition-all duration-300 ${choose == false
                            ? "bg-[#CF2516] text-white"
                            : "bg-transparent text-[#1E1E1E]"
                            }`}
                    >
                        Питание
                    </button>
                    <button
                        onClick={() => setChoose(true)}
                        className={`w-[50%] rounded-[15px] font-openSans text-[17px] font-[600] flex items-center justify-center tracking-[0.8px] transition-all duration-300 ${choose == true
                            ? "bg-[#CF2516] text-white"
                            : "bg-transparent text-[#1E1E1E]"
                            }`}
                    >
                        Аксессуары
                    </button>
                </div>
            </div>
        </section>
    )
}
