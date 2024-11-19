import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { TbListSearch } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";

export default function Navbar() {
    const getBlockClass = (isActive) =>
        isActive
            ? "flex flex-col items-center gap-[2px] text-white bg-[#CF2516] rounded-full p-[12px] duration-[0.4s] shadow-[0_0_10px_0_rgba(207,37,22,0.75)]"
            : "flex flex-col items-center gap-[2px] text-[#A19E9E] bg-transparent rounded-full p-[6px]";

    const getTextClass = (isActive) =>
        isActive
            ? "text-[0px] tracking-[1px] font-openSans duration-[0.4s]"
            : "text-[13px] tracking-[1px] font-openSans";

    const getIconClass = (isActive) =>
        isActive
            ? "text-[35px]"
            : "text-[25px]"

    return (
        <nav className="w-full h-[74px] bg-white fixed left-0 bottom-0 border-t-[0.1px] border-[#CF2516] shadow-[0px_-2px_10px_0px_rgba(207,37,22,0.15)] flex items-center">
            <ul className="flex items-center w-full">
                <li className="w-[25%] flex justify-center">
                    <NavLink to="/" className={({ isActive }) => getBlockClass(isActive)}>
                        {({ isActive }) => (
                            <>
                                <GoHome className={getIconClass(isActive)} />
                                <p className={getTextClass(isActive)}>Главная</p>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className="w-[25%] flex justify-center">
                    <NavLink to="/catalog" className={({ isActive }) => getBlockClass(isActive)}>
                        {({ isActive }) => (
                            <>
                                <TbListSearch className={getIconClass(isActive)} />
                                <p className={getTextClass(isActive)}>Каталог</p>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className="w-[25%] flex justify-center">
                    <NavLink to="/cart" className={({ isActive }) => getBlockClass(isActive)}>
                        {({ isActive }) => (
                            <>
                                <PiShoppingCartSimple className={getIconClass(isActive)} />
                                <p className={getTextClass(isActive)}>Корзинка</p>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className="w-[25%] flex justify-center">
                    <NavLink to="/profile" className={({ isActive }) => getBlockClass(isActive)}>
                        {({ isActive }) => (
                            <>
                                <MdOutlinePersonOutline className={getIconClass(isActive)} />
                                <p className={getTextClass(isActive)}>Профиль</p>
                            </>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}