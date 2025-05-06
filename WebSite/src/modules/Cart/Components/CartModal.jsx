import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import cartOrderStore from "../store/cartOrderStore";
import api from "../../../utils/axiosInstance";

export default function CartModal({ modal, setModal }) {
    const { orderProducts } = cartOrderStore();
    const elOverlay = useRef();
    const hiddenListRef = useRef();

    const handleCloseModal = (evt) => {
        if (evt.target === elOverlay.current) {
            setModal(!modal);
        }
    };

    const handleGeneratePDF = async () => {
        const items = hiddenListRef.current?.children;
        if (!items || items.length === 0) return;

        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        for (let i = 0; i < items.length; i++) {
            const canvas = await html2canvas(items[i], {
                scale: 2,
                useCORS: true,
            });
            const imgData = canvas.toDataURL("image/png");

            if (i !== 0) pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
        }

        const pdfBlob = pdf.output("blob");

        const pdfFile = new File([pdfBlob], "order.pdf", { type: "application/pdf" });

        const formData = new FormData();
        formData.append("image", pdfFile);

        api.post("/user/upload/", formData)
            .then(response => {
                const imageUrl = response.data.image_url;
                const phoneNumber = "996555251506";
                const message = `Ваш заказ успешно оформлен!\n${imageUrl}`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, "_blank");
            })
            .catch(error => {
                console.error("Upload failed:", error);
            });
    };

    return (
        <section
            onClick={handleCloseModal}
            ref={elOverlay}
            className={`flex ${modal ? "" : "hidden"} p-[20px] bg-[#00000041] fixed w-full h-full left-0 top-0 z-[1000] cursor-pointer justify-center items-center`}
        >
            <div className="bg-white shadow w-[300px] rounded-[30px] p-[20px]  overflow-hidden">
                <h2 className="font-grechen text-[24px] text-black tracking-[3px] font-bold text-center">
                    Sport <span className="text-[#CF2516]">Nutritions</span>!
                </h2>

                <ul
                    className="absolute left-[-10000px] top-0"
                    ref={hiddenListRef}
                >
                    {orderProducts.map((item) => (
                        <li
                            key={item.id}
                            style={{
                                width: "794px",
                                height: "1123px",
                                padding: "40px",
                                boxSizing: "border-box",
                                background: "white",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            }}
                        >
                            <img
                                src={item.foto}
                                alt=""
                                crossOrigin="anonymous"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                            />
                            <div
                                style={{
                                    fontSize: "20px",
                                    fontFamily: "Open Sans, sans-serif",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <h3 style={{ fontWeight: "bold" }}>{item.name}</h3>
                                <p style={{ color: "#555", lineHeight: 1.5 }}>{item.description}</p>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p><b>Цена:</b></p>
                                    <p>{item.price} сом</p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <p><b>Количество:</b></p>
                                    <p>{item.count} шт</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <p className="text-[16px] px-[12px] text-center py-[20px] text-[#1e1e1ed2] font-popins font-[500] tracking-[1px]">Спасибо, что выбрали наш магазин! Мы ценим ваше доверие и с радостью оформим ваш заказ. Надеемся, покупки у нас принесут вам только положительные эмоции!</p>


                <center>
                    <button
                        onClick={handleGeneratePDF}
                        className="bg-red-600 flex gap-[10px] items-center justify-center text-white py-1 px-4 text-[18px] rounded-full shadow w-[80%]"
                    >
                        Оформить Заказ
                    </button>
                </center>
            </div>
        </section>
    );
}