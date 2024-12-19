
export default function SingleCatalog({ catalog }) {
    const { brand, category, goal } = catalog;

    return (
        <table className="w-full">
            <tbody className="w-full">
                    <tr className="even:bg-[#fff] odd:bg-[#a19e9e5e] grid-col-[2]">
                        <td className="pl-[16px]">Бренд</td>
                        <td className="ml-[16px]">{brand?.name}</td>
                    </tr>
                    <tr className="even:bg-[#fff] odd:bg-[#a19e9e5e] grid-col-[2]">
                        <td className="pl-[16px]">Категория</td>
                        <td className="ml-[16px]">{category?.name}</td>
                    </tr>
                    <tr className="even:bg-[#fff] odd:bg-[#a19e9e5e] grid-col-[2]">
                        <td className="pl-[16px]">Цель</td>
                        <td className="ml-[16px]">{goal?.name}</td>
                    </tr>
            </tbody>
        </table>
    )
}
