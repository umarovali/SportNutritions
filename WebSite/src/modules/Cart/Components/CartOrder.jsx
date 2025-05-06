import cartOrderStore from '../store/cartOrderStore';

export default function CartOrder({ setModal }) {
  const { orderProducts } = cartOrderStore()

  const total = orderProducts?.reduce((acc, product) => {
    return acc + product.price * product.count;
  }, 0);

  return (
    <div className="w-full h-[190px] bg-[#fff] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)] rounded-t-[12px] fixed bottom-[70px] px-[15px] py-[10px]">
      <div className='min-h-[100px] max-h-[100px] overflow-y-auto flex flex-col gap-[4px]'>
        <div className='flex items-center justify-between'>
          <p className='text-[15px] text-[#1e1e1ed2] font-popins font-[500] tracking-[1px]'>Доставка:</p>
          <p className='text-[14px] text-[#1e1e1e] font-popins font-[600]'>Договорная</p>
        </div>
        {orderProducts.map((item) => (
          <div key={item.id} className='flex items-center justify-between'>
            <p className='text-[15px] text-[#1e1e1ed2] font-popins font-[500] tracking-[1px]'>
              Товар ({item.price} сом):
            </p>
            <p className='text-[14px] text-[#1e1e1e] font-popins font-[600]'>
              {item.price * item.count} сом
            </p>
          </div>
        ))}
        <div className='flex items-center justify-between'>
          <p className='text-[15px] text-[#1e1e1ed2] font-popins font-[500] tracking-[1px]'>Сумма:</p>
          <p className='text-[14px] text-[#1e1e1e] font-popins font-[600]'>{total} сом</p>
        </div>
      </div>

      <hr className='my-[12px]' />
      <div className='flex items-center justify-between'>
        <p className='text-[15px] text-[#1e1e1ed2] font-popins font-[500] tracking-[1px]'>Всего: {total} сом</p>
        <button onClick={setModal} className=" bg-red-600 flex gap-[10px] items-center justify-center text-white py-1 px-4 text-[18px] rounded-full shadow w-auto">
          Заказать
        </button>
      </div>

    </div >
  );
}
