import { useState } from "react";
import Header from "../../components/Header/Header";
import CartChoose from "./Components/CartChoose";
import CartProduct from "./Components/CartProduct";
import CartOrder from "./Components/CartOrder";
import CartModal from "./Components/CartModal";

export default function Cart() {
    const [requestText, setRequestText] = useState('nutrition');
    const [modal, setModal] = useState(false);

    return (
        <>
            <Header text={"К"} span={"орзинка"} />
            <CartChoose requestText={requestText} setRequestText={setRequestText} />
            <CartProduct requestText={requestText} />
            <CartOrder setModal={setModal} />
            <CartModal modal={modal} setModal={setModal} />
        </>
    )
}
