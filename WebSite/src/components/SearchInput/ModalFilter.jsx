import { useEffect, useRef, useState } from "react";
import { MdOutlineCategory } from "react-icons/md";
import { TbBrandAppstore } from "react-icons/tb";
import { IoMdFitness } from "react-icons/io";
import useBrand from "../../store/useBrand";
import useCategory from "../../store/useCategory";
import useGoal from "../../store/useGoal";
import { useNavigate } from "react-router-dom";
import useModalData from "./Store/useModalData";

export default function ModalFilter({ modal, setModal }) {
    const [filterData, setFilterData] = useState({
        minPrice: "",
        maxPrice: "",
        category: "",
        brand: "",
        goal: ""
    });
    const { setModalData } = useModalData();

    const { dataBrand, fetchDataBrand } = useBrand();
    const { dataCategory, fetchDataCategory } = useCategory();
    const { dataGoal, fetchDataGoal } = useGoal();

    const elOverlay = useRef();
    const navigate = useNavigate();

    const handleCloseModal = (evt) => {
        if (evt.target === elOverlay.current) {
            setModal(false);
        }
    };

    useEffect(() => {
        const CloseModal = (evt) => {
            if (evt.key === "Escape") {
                setModal(false);
            }
        };

        if (modal) {
            window.addEventListener("keyup", CloseModal);
        }
        return () => window.removeEventListener("keyup", CloseModal);
    }, [modal, setModal]);

    useEffect(() => {
        fetchDataBrand();
        fetchDataCategory();
        fetchDataGoal();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFilter = () => {
        if (filterData.minPrice.length || filterData.maxPrice.length || filterData.brand.length || filterData.category.length | filterData.goal.length) {
            setModalData(filterData);
            setModal(!modal)
            if (location.pathname !== "/search") {
                navigate("/search")
            }
        } else {
            setModal(!modal)
        }
    };

    return (
        <div onClick={handleCloseModal} ref={elOverlay} className={`${!modal ? "hidden" : ""} cursor-pointer text-[#1e1e1e] bg-[#151515a3] fixed left-0 top-0 w-full h-full z-[1000] p-[30px] flex justify-center items-center`}>
            <div className="bg-[#fff] rounded-[30px] w-full p-[15px]">
                <div className="flex justify-between">
                    <h2 className="text-[22px] font-[400] font-golos text-[#1e1e1e]">Фильтер</h2>
                    <button onClick={() => setModal(!modal)} className="bg-[#CF2516] w-[32px] h-[32px] rounded-full text-[28px] text-[#FFF] flex items-center justify-center">&times;</button>
                </div>

                <div className="flex flex-col gap-[10px] mt-[10px]">
                    <div className="flex gap-[10px]">
                        <input
                            type="number"
                            name="minPrice"
                            value={filterData.minPrice}
                            onChange={handleFilterChange}
                            placeholder="Цена от"
                            className="w-[100%] h-[35px] border-[1px] border-[#A29E9E] rounded-[15px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[12px] outline-none"
                        />
                        <input
                            type="number"
                            name="maxPrice"
                            value={filterData.maxPrice}
                            onChange={handleFilterChange}
                            placeholder="Цена до"
                            className="w-[100%] h-[35px] border-[1px] border-[#A29E9E] rounded-[15px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[12px] outline-none"
                        />
                    </div>
                    <div className="w-[100%] h-[35px] relative">
                        <select
                            name="category"
                            value={filterData.category}
                            onChange={handleFilterChange}
                            className="w-[100%] h-[100%] appearance-none border-[1px] border-[#A29E9E] rounded-[15px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[12px] outline-none"
                        >
                            <option value="">Категории</option>
                            {dataCategory?.map((e) => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                        <MdOutlineCategory className="text-[#A29E9E] text-[24px] absolute right-[7px] top-[5px]" />
                    </div>
                    <div className="w-[100%] h-[35px] relative">
                        <select
                            name="brand"
                            value={filterData.brand}
                            onChange={handleFilterChange}
                            className="w-[100%] h-[100%] appearance-none border-[1px] border-[#A29E9E] rounded-[15px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[12px] outline-none"
                        >
                            <option value="">Бренды</option>
                            {dataBrand?.map((e) => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                        <TbBrandAppstore className="text-[#A29E9E] text-[24px] absolute right-[7px] top-[5px]" />
                    </div>
                    <div className="w-[100%] h-[35px] relative">
                        <select
                            name="goal"
                            value={filterData.goal}
                            onChange={handleFilterChange}
                            className="w-[100%] h-[100%] appearance-none border-[1px] border-[#A29E9E] rounded-[15px] font-openSans text-[#A29E9E] text-[17px] font-[400] pl-[12px] outline-none"
                        >
                            <option value="">Цель</option>
                            {dataGoal?.map((e) => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                        <IoMdFitness className="text-[#A29E9E] text-[24px] absolute right-[7px] top-[5px]" />
                    </div>
                    <button
                        onClick={handleFilter}
                        className="bg-[#3376c7] h-[35px] text-[17px] text-[#fff] rounded-[10px] tracking-[2px] uppercase"
                    >
                        фильтровать
                    </button>
                </div>
            </div>
        </div>
    );
}
