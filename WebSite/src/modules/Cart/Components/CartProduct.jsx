import { useEffect, useCallback } from "react";
import CartProductItem from "./CartProductItem";
import useCartProduct from "../../../store/useCartProduct";
import cartOrderStore from "../store/cartOrderStore"; // Zustand store

export default function CartProduct({ requestText }) {
  const { dataCartProduct, fetchCartProduct } = useCartProduct();
  const { setOrderProducts } = cartOrderStore(); // ✅ использовать Zustand

  useEffect(() => {
    fetchCartProduct(requestText);
    setOrderProducts([]);
  }, [requestText, fetchCartProduct, setOrderProducts]);

  const handleOrderProductChange = useCallback((updatedProduct) => {
    setOrderProducts((prev) => {
      const filtered = prev.filter((p) => p.id !== updatedProduct.id);
      return [...filtered, updatedProduct];
    });
  }, [setOrderProducts]);

  return (
    <section className="mb-[300px]">
      <div className="container">
        <ul className="flex flex-col gap-[20px] mt-[20px] z-[-10]">
          {dataCartProduct?.map((item) => (
            <CartProductItem
              key={item.id}
              item={item}
              requestText={requestText}
              onOrderProductChange={handleOrderProductChange}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}