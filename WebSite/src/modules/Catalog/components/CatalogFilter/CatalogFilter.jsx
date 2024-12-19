export default function CatalogFilter({ activeFilter, setActiveFilter }) {

    const handleFilterClick = (filter) => {
        if (activeFilter !== filter) {
            setActiveFilter(filter);
        }
    };

    const getClassNames = (filter) => {
        return `
            py-[3px] px-[12px] rounded-[15px] border-[1px] font-openSans font-[600] text-[15px] tracking-[1px] cursor-pointer transition-all duration-300 ${activeFilter === filter
                ? "bg-[#CF2516] border-[#1E1E1E] text-[#fff]"
                : "bg-[#cf251600] border-[#1e1e1e00] text-[#1E1E1E]"
            }
        `;
    };

    return (
        <section className="px-[16px] mt-[16px]">
            <ul className="flex gap-[10px] overflow-x-auto">
                <li
                    onClick={() => handleFilterClick("category")}
                    className={getClassNames("category")}
                >
                    Категории
                </li>
                <li
                    onClick={() => handleFilterClick("brand")}
                    className={getClassNames("brand")}
                >
                    Бренды
                </li>
                <li
                    onClick={() => handleFilterClick("access/category")}
                    className={getClassNames("access/category")}
                >
                    Аксессуары
                </li>
                <li
                    onClick={() => handleFilterClick("goals")}
                    className={getClassNames("goals")}
                >
                    Цели
                </li>
            </ul>
        </section>
    );
}
