import React from 'react'
import { Link } from 'react-router-dom'

export default function CatalogChooseItem({ Foto, text, link }) {
    return (
        <li className='w-[100%] h-[200px] relative object-cover rounded-[15px] cursor-pointer'>
            <Link to={`/catalog${link}`}>
                <img className='w-[100%] h-[100%] rounded-[15px] object-cover' src={Foto} alt="" />
                <h2 className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] font-golos text-[24px] uppercase tracking-[0.8px] bg-[#000000a9] px-[16px] py-[2px] rounded-[8px]'>{text}</h2>
            </Link>
        </li>
    )
}
