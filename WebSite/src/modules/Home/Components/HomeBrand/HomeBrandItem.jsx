export default function HomeBrandItem({ item }) {
    const { name, image } = item;

    return (
        <li className="flex flex-col items-center gap-[4px]">
            <div className='border-[1px] border-[#A29E9E] rounded-[8px] w-[60px] h-[60px] p-[2px] shadow-[2px_2px_8px_0_rgba(0,0,0,0.25)]'>
                <img src={image} alt={name} className="w-[100%] h-[100%] object-contain" />
            </div>
            <p className="w-[auto] text-[#1E1E1E] font-openSans text-[10px] font-[400] text-center">{name}</p>
        </li>
    )
}
