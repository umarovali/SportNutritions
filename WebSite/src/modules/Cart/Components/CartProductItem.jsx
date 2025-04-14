import { BsCartDash } from 'react-icons/bs';

export default function CartProductItem({ item }) {
  const keyObj = Object.keys(item)[2];

  const { image, name, price, description } = item[keyObj]



  return (
    <li className='bg-[#fff] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)] w-full rounded-[20px] h-[150px] flex cursor-pointer'>
      <img className='min-w-[40%] max-w-[40%] h-[150px] object-cover border-r-[1px] rounded-l-[20px]' src={image[0]} alt="" />

      <div className='px-[8px] py-[10px] w-full'>
        <h3 className='text-[#1E1E1E] font-openSans text-[13px] font-[700] line-clamp-1 h-[20px]'>{name}</h3>
        <p className="text-[9px] h-[70px] font-openSans tracking-[0.5px] leading-[11px] font-[400] line-clamp-4 pt-[6px]">{description}</p>
        <div className="pt-[4px] flex justify-between items-end mt-[10px]">
          <p className="text-[13px] font-[600]">
            <span className="text-[#1E1E1E] font-[400] tracking-[0.4px]">{price.split('.')[0]} сом</span>
          </p>

          <div className='flex items-center gap-[10px]'>
            <button
              className="w-[26px] h-[26px] rounded-[2px] border-[1px] border-[#CF2516] text-[#CF2516] flex items-center justify-center p-[2px]"
            >
              <BsCartDash className="pt-[1px] text-[20px]" />
            </button>
            <button className='w-[60px] rounded-[2px] border-[1px] border-[#CF2516] text-[#fff] bg-[#CF2516] flex items-center justify-around px-[2px]'><p>-</p> <span className='px-[5px]'>5</span> <p>+</p></button>
          </div>
        </div>
      </div>
    </li >
  )
}
