import { useEffect, useRef } from "react";

export default function ModalConfirm({ modal, setModal, handleSubmitForm }) {
    const elOverlay = useRef();

    const handleCloseModal = (evt) => {
        if (evt.target === elOverlay.current) {
            setModal(false)
        }
    }

    useEffect(() => {
        const CloseModal = (evt) => {
            if (evt.key === "Escape") {
                setModal(false)
            }
        }

        if (modal) {
            window.addEventListener("keyup", CloseModal)
        }
        return () => window.removeEventListener("keyup", CloseModal)
    }, [modal, setModal])

    return (
        <div onClick={handleCloseModal} ref={elOverlay} className={`${!modal ? "hidden" : ""} cursor-pointer text-[#1e1e1e] bg-[#151515a3] fixed left-0 top-0 w-full h-full z-[1000] p-[30px] flex justify-center items-center`}>
            <div className="bg-[#fff] rounded-[30px] w-full p-[15px] h-auto">
                <div className="flex justify-between">
                    <h2 className="text-[22px] font-[400] font-golos text-[#1e1e1e]">Важно!</h2>
                    <button onClick={() => setModal(!modal)} className="bg-[#CF2516] w-[32px] h-[32px] rounded-full text-[28px] text-[#FFF] flex items-center justify-center">&times;</button>
                </div>

                <div>
                    <p className="p-[10px] text-[14px] font-golos text-[#1e1e1e] font-[300]">
                        Ваш номер телефона должен быть обязательно вашим личным.
                        Он будет использоваться для подтверждения вашей личности,
                        оформления заказов и получения важных уведомлений в приложении.
                        Убедитесь, что у вас есть доступ к указанному номеру,
                        так как в дальнейшем он потребуется для авторизации и других операций.
                    </p>

                    <div className="grid grid-cols-2 gap-[10px]">
                        <button onClick={() => setModal(!modal)} className="bg-[#ffbb00] h-[35px] text-[17px] text-[#fff] rounded-[10px] tracking-[2px] uppercase">отмена</button>
                        <button onClick={handleSubmitForm} className="bg-[#1ba61b] h-[35px] text-[17px] text-[#fff] rounded-[10px] tracking-[2px] uppercase">дальше</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
