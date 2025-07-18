import { Link } from "react-router-dom";
import ProductItemSwiper from "./ProductItemSwiper";
import AddRemoveCart from "./AddRemoveCart";

export default function ProductItem({ item, requestText }) {
    const { image, name, price, description, id } = item;
   
    return (
        <li className='rounded-[10px] even:mt-[16px] odd:mb-[16px] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer'>
            <Link to={`/${id}?url=${requestText}`} >
                <ProductItemSwiper images={image} />
                <div className="pt-[4px] pb-[6px] px-[12px]">
                    <h3 className="text-[#1E1E1E] font-openSans text-[11px] font-[700] truncate">{name}</h3>
                    <p className="text-[8.5px] font-openSans tracking-[0.5px] leading-[11px] font-[400] line-clamp-3">{description}</p>
                    <div className="pt-[4px] flex justify-between items-center">
                        <p className="text-[10px] text-[#CF2516] font-[600]">
                            Цена: <span className="text-[#1E1E1E] font-[400] tracking-[0.4px]">{price.split('.')[0]} сом</span>
                        </p>
                        <AddRemoveCart requestText={requestText} productid={id} />
                    </div>
                </div>
            </Link>
        </li>
    );
}