import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function ProductTitle({ text, link }) {

    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-between mt-[15px] px-[10px]">
                    <h3 className="text-[24px] font-[500] font-golos text-[#1e1e1e]">Все {text}</h3>
                    <button className="text-[26px] bg-[#CF2516] px-[4px] py-[5px] rounded-[4px] text-[#fff]">
                        <Link to={link}><GrAddCircle /></Link>
                    </button>
                </div>
            </div>
        </section>
    );
}