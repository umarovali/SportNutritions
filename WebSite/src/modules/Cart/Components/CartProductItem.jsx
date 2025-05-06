import { useState, useEffect } from 'react';
import { BsCartDash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useCartProduct from '../../../store/useCartProduct';
import api from '../../../utils/axiosInstance';
import toast from 'react-hot-toast';

export default function CartProductItem({ item, requestText, onOrderProductChange }) {
  const keyObj = Object.keys(item)[2];
  const token = localStorage.getItem("access_token");
  const { id, image, name, price, description } = item[keyObj];
  const { fetchCartProduct } = useCartProduct();

  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(`cart_count_${id}`);
    return storedCount ? JSON.parse(storedCount) : 1;
  });

  useEffect(() => {
    localStorage.setItem(`cart_count_${id}`, JSON.stringify(count));
  }, [count, id]);

  useEffect(() => {
    const product = {
      id,
      foto: image[0],
      name,
      description,
      price: parseInt(price),
      count,
    };
    onOrderProductChange(product);
  }, [count, id, image, name, description, price, onOrderProductChange]);

  const updateCount = (newCount) => {
    setCount(newCount);
  };

  const handleDeleteCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    api.delete(`${requestText}/cart/${id}/`, {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` }
    })
      .then(() => {
        fetchCartProduct(requestText);
        localStorage.removeItem(`cart_count_${id}`); // удаляем count при удалении
        toast.success("Успешно удалено!");
      })
      .catch(err => console.error("Ошибка удаления:", err));
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (count < 10) updateCount(count + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (count > 1) updateCount(count - 1);
  };

  return (
    <li>
      <Link
        className='bg-[#fff] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)] w-full rounded-[20px] h-[150px] flex cursor-pointer'
        to={`/${id}?url=${requestText}`}
      >
        <img
          className='min-w-[40%] max-w-[40%] h-[150px] object-cover border-r-[1px] rounded-l-[20px]'
          src={image[0]}
          alt=""
        />
        <div className='px-[8px] py-[10px] w-full'>
          <h3 className='text-[#1E1E1E] font-openSans text-[13px] font-[700] line-clamp-1 h-[20px]'>{name}</h3>
          <p className="text-[9px] h-[70px] font-openSans tracking-[0.5px] leading-[11px] font-[400] line-clamp-4 pt-[6px]">{description}</p>

          <div className="pt-[4px] flex justify-between items-end mt-[10px]">
            <p className="text-[13px] font-[600]">
              <span className="text-[#1E1E1E] font-[400] tracking-[0.4px]">
                {parseInt(price) * count} сом
              </span>
            </p>

            <div className='flex items-center gap-[10px]'>
              <button
                onClick={handleDeleteCart}
                className="w-[26px] h-[26px] rounded-[2px] border-[1px] border-[#CF2516] text-[#CF2516] flex items-center justify-center p-[2px]"
              >
                <BsCartDash className="pt-[1px] text-[20px]" />
              </button>

              <div className='w-[60px] rounded-[2px] border-[1px] border-[#CF2516] text-[#fff] bg-[#CF2516] flex items-center justify-around px-[2px]'>
                <button onClick={handleDecrement} className='w-full h-full'><p>-</p></button>
                <span className='px-[5px]'>{count}</span>
                <button onClick={handleIncrement} className='w-full h-full'><p>+</p></button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}