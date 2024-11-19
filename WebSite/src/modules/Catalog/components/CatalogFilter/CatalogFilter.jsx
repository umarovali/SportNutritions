import React from 'react'

export default function CatalogFilter() {
    return (
        <section className='px-[16px] mt-[16px]'>
                <ul className='flex gap-[10px] overflow-x-auto'>
                    <li className='py-[3px] px-[12px] bg-[#CF2516] rounded-[15px] border-[1px] border-[#1E1E1E] font-openSans font-[600] text-[15px] text-[#fff] tracking-[1px] cursor-pointer'>Категории</li>
                    <li className='py-[3px] px-[12px] bg-[#cf251600] rounded-[15px] border-[1px] border-[#1e1e1e00] font-openSans font-[600] text-[15px] text-[##1E1E1E] tracking-[1px] cursor-pointer'>Бренды</li>
                    <li className='py-[3px] px-[12px] bg-[#cf251600] rounded-[15px] border-[1px] border-[#1e1e1e00] font-openSans font-[600] text-[15px] text-[#1E1E1E] tracking-[1px] cursor-pointer'>Аксессуары</li>
                    <li className='py-[3px] px-[12px] bg-[#cf251600] rounded-[15px] border-[1px] border-[#1e1e1e00] font-openSans font-[600] text-[15px] text-[#1E1E1E] tracking-[1px] cursor-pointer'>Цели</li>
                </ul>
        </section>
    )
}
