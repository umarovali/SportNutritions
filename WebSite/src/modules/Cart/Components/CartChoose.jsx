
export default function CartChoose({ requestText, setRequestText }) {
    const handleClick = (text) => {
        if (requestText !== text) {
            setRequestText(text);
        }
    };



    return (
        <section className="mt-[70px]">
            <div className="container">
                <div className="flex border-[1px] mt-[16px] bg-transparent border-[#1E1E1E] rounded-[15px] w-[100%] h-[32px]">
                    <button
                        onClick={() => handleClick("nutrition")}
                        className={`w-[50%] rounded-[15px] font-openSans text-[17px] font-[600] flex items-center justify-center tracking-[0.8px] transition-all duration-300 ${requestText === "nutrition"
                            ? "bg-[#CF2516] text-white"
                            : "bg-transparent text-[#1E1E1E]"
                            }`}
                    >
                        Питание
                    </button>
                    <button
                        onClick={() => handleClick("accessories")}
                        className={`w-[50%] rounded-[15px] font-openSans text-[17px] font-[600] flex items-center justify-center tracking-[0.8px] transition-all duration-300 ${requestText === "accessories"
                            ? "bg-[#CF2516] text-white"
                            : "bg-transparent text-[#1E1E1E]"
                            }`}
                    >
                        Аксессуары
                    </button>
                </div>
            </div>
        </section>
    );
}
