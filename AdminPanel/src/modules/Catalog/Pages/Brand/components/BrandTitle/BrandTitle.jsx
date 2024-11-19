import React from 'react'
import ModalAdd from '../Modals/ModalAdd'
import { GrAddCircle } from "react-icons/gr";

export default function BrandTitle() {
    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-between mt-[15px] px-[10px]">
                    <h3 className="text-[24px] font-[500] font-golos text-[#1e1e1e]">Все бреннды</h3>
                    <button className="text-[26px] bg-[#CF2516] px-[4px] py-[5px] rounded-[4px] text-[#fff]">
                        <GrAddCircle />
                    </button>
                </div>

                {/* <ModalAdd /> */}
            </div>
        </section>
    )
}
