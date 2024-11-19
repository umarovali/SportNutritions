import { useEffect, useState } from "react";
import ProductItem from "../../../../components/ProductItem/ProductItem";
import axios from "axios";

export default function HomeProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios("http://127.0.0.1:8000/api/nutrition/")
            .then(products => setProducts(products.data))
    }, [])

    return (
        <section>
            <div className="container">
                <ul className='grid grid-cols-2 gap-x-[15px] mt-[16px] mb-[100px]'>
                    {products.map((item) => (
                        <ProductItem key={item.id} item={item} />
                    ))}
                    {/* <li className='mb-[16px] rounded-[10px] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer'>
                        <div className="aspect-w-1 aspect-h-1 border-b-[1px] border-[#CF2516] overflow-hidden">
                            <img className="w-full h-full object-contain transition-transform duration-300 ease-in-out scale-90 transform hover:scale-100" src={ProductFoto} alt="" />
                        </div>

                        <div className="pt-[2px] pb-[6px] px-[11px]">
                            <h3 className="text-[#1E1E1E] font-openSans text-[11px] font-[400]">Levrone GOLD Lean Mass 6 kg Bunty  Lean Mass</h3>

                            <div className="pt-[9px] flex justify-between items-center">
                                <p className="text-[10px] text-[#CF2516] font-[600]">Цена: <span className="text-[#1E1E1E] font-[400] tracking-[0.4px]">6100сом</span></p>

                                <button className="w-[20px] h-[20px] rounded-[2px] border-[1px] border-[#CF2516] text-[#CF2516] flex items-center justify-center p-[1px]">
                                    <MdAddShoppingCart className="pt-[1px] text-[20px]" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className='mt-[16px] rounded-[10px] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)]  cursor-pointer'>
                        <div className="aspect-w-1 aspect-h-1 border-b-[1px] border-[#CF2516] overflow-hidden">
                            <img className="w-full h-full object-contain transition-transform duration-300 ease-in-out scale-90 transform hover:scale-100" src={ProductFoto} alt="" />
                        </div>

                        <div className="pt-[2px] pb-[6px] px-[11px]">
                            <h3 className="text-[#1E1E1E] font-openSans text-[11px] font-[400]">Levrone GOLD Lean Mass 6 kg Bunty  Lean Mass</h3>

                            <div className="pt-[9px] flex justify-between items-center">
                                <p className="text-[10px] text-[#CF2516] font-[600]">Цена: <span className="text-[#1E1E1E] font-[400] tracking-[0.4px]">6100сом</span></p>

                                <button className="w-[20px] h-[20px] rounded-[2px] border-[1px] border-[#CF2516] text-[#CF2516] flex items-center justify-center p-[1px]">
                                    <MdAddShoppingCart className="pt-[1px] text-[20px]" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className='mb-[16px] rounded-[10px] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer'>
                        <div className="aspect-w-1 aspect-h-1 border-b-[1px] border-[#CF2516] overflow-hidden">
                            <img className="w-full h-full object-contain transition-transform duration-300 ease-in-out scale-90 transform hover:scale-100" src={ProductFoto} alt="" />
                        </div>

                        <div className="pt-[2px] pb-[6px] px-[11px]">
                            <h3 className="text-[#1E1E1E] font-openSans text-[11px] font-[400]">Levrone GOLD Lean Mass 6 kg Bunty  Lean Mass</h3>

                            <div className="pt-[9px] flex justify-between items-center">
                                <p className="text-[10px] text-[#CF2516] font-[600]">Цена: <span className="text-[#1E1E1E] font-[400] tracking-[0.4px]">6100сом</span></p>

                                <button className="w-[20px] h-[20px] rounded-[2px] border-[1px] border-[#CF2516] text-[#CF2516] flex items-center justify-center p-[1px]">
                                    <MdAddShoppingCart className="pt-[1px] text-[20px]" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className='mt-[16px] rounded-[10px] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)]  cursor-pointer'>
                        <div className="aspect-w-1 aspect-h-1 border-b-[1px] border-[#CF2516] overflow-hidden">
                            <img className="w-full h-full object-contain transition-transform duration-300 ease-in-out scale-90 transform hover:scale-100" src={ProductFoto} alt="" />
                        </div>

                        <div className="pt-[2px] pb-[6px] px-[11px]">
                            <h3 className="text-[#1E1E1E] font-openSans text-[11px] font-[400]">Levrone GOLD Lean Mass 6 kg Bunty  Lean Mass</h3>

                            <div className="pt-[9px] flex justify-between items-center">
                                <p className="text-[10px] text-[#CF2516] font-[600]">Цена: <span className="text-[#1E1E1E] font-[400] tracking-[0.4px]">6100сом</span></p>

                                <button className="w-[20px] h-[20px] rounded-[2px] border-[1px] border-[#CF2516] text-[#CF2516] flex items-center justify-center p-[1px]">
                                    <MdAddShoppingCart className="pt-[1px] text-[20px]" />
                                </button>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </div>
        </section>
    )
}
