import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import api from '../../../utils/axiosInstance';
import useCartProduct from '../../../store/useCartProduct';

export default function CartOrder() {
  const { dataCartProduct } = useCartProduct()
  const ref = useRef();
  const cartProducts = [
    { name: 'Товар 1', count: 2, price: 100 },
    { name: 'Товар 2', count: 1, price: 150 },
  ];

  const handleGenerateAndSend = async () => {
    // 1) Захватываем блок в canvas
    const canvas = await html2canvas(ref.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');

    // 2) Создаём PDF точно под размер canvas
    const doc = new jsPDF({
      orientation: 'l',      // landscape
      unit: 'px',
      format: [canvas.width, canvas.height],
    });
    doc.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    doc.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

    // 3) Получаем Blob
    const pdfBlob = doc.output('blob');

    // 4) Загружаем на сервер
    const formData = new FormData();
    formData.append('image', pdfBlob, 'order.pdf');
    const res = await api.post('user/upload/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    // 5) Открываем WhatsApp с ссылкой

    console.log(res);

    const fileUrl = res.data.image_url;
    const phone = '555251506';
    const message = `Здравствуйте! Вот ваш файл заказа: ${fileUrl}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="p-6 mb-[200px]">
      {/* Блок, который попадёт в PDF */}
      {/* <div ref={ref} className="bg-white p-4 rounded shadow-md w-[100] overflow-x-scroll">
        <h1 className="text-2xl font-bold mb-4">Список товаров</h1>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="px-2 py-1">№</th>
              <th className="px-2 py-1">Название</th>
              <th className="px-2 py-1">Кол‑во</th>
              <th className="px-2 py-1">Цена</th>
              <th className="px-2 py-1">Сумма</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((p, i) => (
              <tr key={i} className="even:bg-gray-100">
                <td className="px-2 py-1">{i + 1}</td>
                <td className="px-2 py-1">{p.name}</td>
                <td className="px-2 py-1">{p.count}</td>
                <td className="px-2 py-1">{p.price} сом</td>
                <td className="px-2 py-1">{p.count * p.price} сом</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}



      <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full shadow w-[100%]">
        Загрузить PDF и Отправить в WhatsApp
      </button>
    </div >
  );
}
