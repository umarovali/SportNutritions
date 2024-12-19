import { Link } from "react-router-dom";

export default function CatalogChooseItem({ item, activeFilter }) {
    const { image, name } = item;

    return (
        <li>
            <Link to={`/catalog/${activeFilter}`} className='w-[100%] h-[120px] border-[1px] border-[#A19E9E] rounded-[15px] flex items-center '>
                <div className='max-w-[145px] min-w-[145px] h-[100%] flex justify-center items-center border-r-[1px] border-r-[#A19E9E]'>
                    <img className='w-[100%] h-[100%] object-cover rounded-l-[15px]' src={image} alt={name} />
                </div>
                <p className="font-openSans font-[600] text-[20px] text-[#1E1E1E] w-[100%] text-center px-[20px]">{name}</p>
            </Link>
        </li>
    )
}
