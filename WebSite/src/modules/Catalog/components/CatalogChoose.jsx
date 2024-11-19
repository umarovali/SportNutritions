import BrandFoto from "../../../assets/icons/BrandIcon.svg";

export default function CatalogChoose() {
    return (
        <section>
            <div className="container">
                <ul className="flex flex-col gap-[16px] mt-[16px] pb-[90px]">
                    <li className='w-[100%] h-[120px] border-[1px] border-[#A19E9E] rounded-[15px] flex items-center'>
                        <div className='max-w-[145px] h-[100%] flex justify-center items-center border-r-[1px] border-r-[#A19E9E]'>
                            <img className='w-[95%] h-[95%] object-contain' src={BrandFoto} alt="" />
                        </div>
                        <p className="font-openSans font-[600] text-[20px] text-[#1E1E1E] w-[100%] text-center px-[20px]">AMIX</p>
                    </li>
                    <li className='w-[100%] h-[120px] border-[1px] border-[#A19E9E] rounded-[15px] flex items-center '>
                        <div className='max-w-[145px] h-[100%] flex justify-center items-center border-r-[1px] border-r-[#A19E9E]'>
                            <img className='w-[95%] h-[95%] object-contain' src={BrandFoto} alt="" />
                        </div>
                        <p className="font-openSans font-[600] text-[20px] text-[#1E1E1E] w-[100%] text-center px-[20px]">AMIX</p>
                    </li>
                    <li className='w-[100%] h-[120px] border-[1px] border-[#A19E9E] rounded-[15px] flex items-center '>
                        <div className='max-w-[145px] h-[100%] flex justify-center items-center border-r-[1px] border-r-[#A19E9E]'>
                            <img className='w-[95%] h-[95%] object-contain' src={BrandFoto} alt="" />
                        </div>
                        <p className="font-openSans font-[600] text-[20px] text-[#1E1E1E] w-[100%] text-center px-[20px]">AMIX</p>
                    </li>
                    <li className='w-[100%] h-[120px] border-[1px] border-[#A19E9E] rounded-[15px] flex items-center '>
                        <div className='max-w-[145px] h-[100%] flex justify-center items-center border-r-[1px] border-r-[#A19E9E]'>
                            <img className='w-[95%] h-[95%] object-contain' src={BrandFoto} alt="" />
                        </div>
                        <p className="font-openSans font-[600] text-[20px] text-[#1E1E1E] w-[100%] text-center px-[20px]">AMIX</p>
                    </li>
                    <li className='w-[100%] h-[120px] border-[1px] border-[#A19E9E] rounded-[15px] flex items-center '>
                        <div className='max-w-[145px] h-[100%] flex justify-center items-center border-r-[1px] border-r-[#A19E9E]'>
                            <img className='w-[95%] h-[95%] object-contain' src={BrandFoto} alt="" />
                        </div>
                        <p className="font-openSans font-[600] text-[20px] text-[#1E1E1E] w-[100%] text-center px-[20px]">AMIX</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
