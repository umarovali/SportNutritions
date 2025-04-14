import { useState } from "react";
import Header from "../../components/Header/Header";
import CartChoose from "./Components/CartChoose";
import CartProduct from "./Components/CartProduct";

export default function Cart() {
    const [requestText, setRequestText] = useState('nutrition');

    return (
        <>
            <Header text={"К"} span={"орзинка"} />
            <CartChoose requestText={requestText} setRequestText={setRequestText} />
            <CartProduct requestText={requestText} />
        </>
    )
}
