import React from 'react'

export default function SingleContent({name, description, price}) {
    return (
        <div className='px-[16px] py-[10px]'>
            <h2 className='text-[20px] text-[#1E1E1E] font-semibold font-openSans'>{name}</h2>
            <p className='tracking-[0.5px] text-[16px] text-[#000000d6] font-openSans font-li'>{description}</p>
            <p className='text-[14px] text-[#1e1e1e] font-openSans'><span className='text-[#CF2516]'>Цена: </span>{price?.split('.')[0]}сом</p>
        </div>
    )
}
