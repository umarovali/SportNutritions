import { TbAdjustments } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalFilter from "./ModalFilter";
import useSearchValue from "./Store/useSearchValue";

export default function SearchInput() {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
    const { searchValue, setSearchValue } = useSearchValue()
    useEffect(() => {
        if (location.pathname !== "/search") {
            setSearchValue("")
        }
    }, [location.pathname])
    
    return (
        <>
            <section>
                <div className='container'>
                    <div className='w-[100%] h-[40px] mt-[70px] flex rounded-[15px] shadow-[2px_2px_8px_0_rgba(0,0,0,0.25)] relative'>
                        <CiSearch className="text-[#A29E9E] text-[30px] absolute left-[7px] top-[5px]" />
                        <input
                            value={searchValue}
                            onChange={(evt) => setSearchValue(evt.target.value)}
                            onClick={() => { navigate("/search") }}
                            type="text"
                            className="w-[100%] h-[100%] border-[1px] border-[#A29E9E] border-r-0 rounded-l-[15px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[42px] outline-none"
                            placeholder="Поиск по названию"
                        />
                        <button onClick={() => setModal(true)} className='w-[54px] h-[100%] rounded-r-[15px] bg-[#CF2516] flex items-center justify-center pr-[3px]'>
                            <TbAdjustments className="text-white text-[28px]" />
                        </button>
                    </div>
                </div>
            </section>

            <ModalFilter modal={modal} setModal={setModal} />
        </>
    );
}