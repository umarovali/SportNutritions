import { useEffect, useState } from "react";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { toast } from "react-hot-toast";
import api from "../../../../../utils/axiosInstance";

export default function HelpDeskForm() {
    const [type, setType] = useState("Техническая проблема");
    const [message, setMessage] = useState("");
    const [meData, setMeData] = useState({
        phone_number: null,
        username: null
    });
    const TOKEN = "7832749316:AAHMr7eerAvxn30E4qXoQhA0CokZkOwRk3U";
    const CHAT_ID = "5369970706";
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const token = localStorage.getItem('access_token');

    useEffect(() => {
        api("/user/me/", {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        })
            .then(data => {
                setMeData({
                    phone_number: data.data.phone_number,
                    username: data.data.username
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!type || !message.trim()) {
            toast.error("Пожалуйста, заполните все поля");
            return;
        }

        const text = `<b>Новое обращение</b>
--------------------
<b>Ф.И.О:</b> ${meData.username || ""}
--------------------
<b>Номер телефона:</b> ${meData.phone_number || ""}
--------------------
<b>Тип:</b> ${type}
--------------------
<b>Сообщение:</b> ${message}`;


        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: "HTML",
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.ok) {
                    toast.success("Сообщение успешно отправлено!");
                    setMessage("");
                    setType("Техническая проблема");
                } else {
                    toast.error("Ошибка при отправке. Попробуйте позже.");
                }
            })
            .catch(() => {
                toast.error("Ошибка соединения с Telegram API");
            });
    };

    return (
        <section>
            <div className="container">
                <form onSubmit={handleSubmit} className="space-y-6 mt-[30px] mb-[110px]">
                    <div>
                        <label className="block text-[#333] font-golos tracking-[1px] text-[15px] mb-2">
                            Тип обращения
                        </label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full h-[38px] border-[1px] border-[#1a1a1a] rounded-[8px] font-openSans text-[#1a1a1a] text-[15px] font-[400] pl-[12px] outline-none"
                        >
                            <option>Техническая проблема</option>
                            <option>Вопрос по работе сервиса</option>
                            <option>Предложение по улучшению</option>
                            <option>Другое</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-[#333] font-golos text-[15px] tracking-[1px] mb-2">
                            Сообщение – подробности вашей проблемы или вопроса
                        </label>
                        <textarea
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full border-[1px] border-[#1a1a1a] rounded-[8px] font-openSans text-[#1a1a1a] placeholder:text-[#1a1a1a] text-[15px] font-[400] p-[12px] outline-none resize-none"
                            placeholder="Введите ваше сообщение..."
                        ></textarea>
                    </div>

                    <center>
                        <button
                            type="submit"
                            className="w-[80%] h-[38px] flex justify-center gap-[10px] items-center bg-[#CF2516] text-white font-openSans text-[17px] font-[600] rounded-[15px] transition-colors"
                        >
                            Отправить
                            <MdOutlineMobileScreenShare className="text-[26px]" />
                        </button>
                    </center>
                </form>
            </div>
        </section>
    );
}