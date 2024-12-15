
export default function NutritionViewCategory({ text, title }) {
    return (
        <div className="flex flex-col gap-[6px]">
            <h4 className="font-openSans font-[500] text-[#1E1E1E]">{title}</h4>
            <div className="w-[100%] h-[28px] flex items-center justify-start border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] pl-[14px] bg-[#a29e9e1f]">
                {text}
            </div>
        </div>
    )
}
