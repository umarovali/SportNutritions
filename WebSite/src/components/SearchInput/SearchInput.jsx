import { TbAdjustments } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/axiosInstance";

export default function SearchInput() {
    const [inputValue, setInputValue] = useState("");
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        const timeout = setTimeout(() => {
            if (inputValue.trim().length > 0) {
                api(`/search/?q=${inputValue}`)
                    .then((res) => {
                        // Объединяем массивы accessories и nutrition
                        const combinedData = [...res.data.accessories, ...res.data.nutrition];
                        setSearchData(combinedData);
                    })
                    .catch((err) => console.error(err));
            } else {
                setSearchData([]);
            }
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [inputValue]);

    console.log(searchData);


    return (
        <section>
            <div className='container'>
                <Link to={"/search"} className='w-[100%] h-[40px] mt-[70px] flex rounded-[15px] shadow-[2px_2px_8px_0_rgba(0,0,0,0.25)] relative'>
                    <CiSearch className="text-[#A29E9E] text-[30px] absolute left-[7px] top-[5px]" />
                    <input
                        onChange={(evt) => setInputValue(evt.target.value)}
                        type="text"
                        className="w-[100%] h-[100%] border-[1px] border-[#A29E9E] border-r-0 rounded-l-[15px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[42px] outline-none"
                        placeholder="Поиск по названию"
                    />
                    <button className='w-[54px] h-[100%] rounded-r-[15px] bg-[#CF2516] flex items-center justify-center pr-[3px]'>
                        <TbAdjustments className="text-white text-[28px]" />
                    </button>
                </Link>
            </div>
        </section>
    );
}