export default function NutritionsViewInfo({ info }) {

    return (
        <tbody className="border-[1px] border-[#A29E9E] border-b-[0px] rounded-[5px]">
            {info?.map((item, index) => (
                <tr key={index} className="grid grid-cols-2 border-b-[1px] border-[#A29E9E]">
                    <td className="border-r-[1px] border-[#A29E9E]">
                        <div className='w-full h-[28px] font-openSans flex items-center justify-start text-[#A29E9E] text-[14px] font-[400] px-[8px] bg=[#a29e9e1f]'>{item?.key}</div>
                    </td>
                    <td>
                        <div className='w-full h-[28px] font-openSans flex items-center justify-start text-[#A29E9E] text-[14px] font-[400] px-[8px] bg=[#a29e9e1f]'>{item?.value}</div>
                    </td>
                </tr>
            ))}
        </tbody >
    )
}
