import React from 'react'

export default function HomeChoose() {
    return (
        <section>
            <div className="container">
                <div className="flex border-[1px] mt-[16px] bg-transparent border-[#1E1E1E] rounded-[15px] w-[100%] h-[32px]">
                    <button className='w-[50%] bg-[#CF2516] rounded-[15px] font-openSans text-white text-[17px] font-[600] flex items-center justify-center tracking-[0.8px]'>Категории</button>
                    <button className='w-[50%] bg-transparent rounded-[15px] font-openSans text-[#1E1E1E] text-[17px] font-[600] flex items-center justify-center tracking-[0.8px]'>Аксесуары</button>
                </div>
            </div>
        </section>
    )
}
