import { useState } from "react";
import AboutAppFAQItem from "./AboutAppFAQItem";

export default function AboutAppFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="mt-[30px] mb-[100px]">
            <div className="container">
                <ul className='px-[2px] flex flex-col gap-[12px] mt-[10px]'>
                    <AboutAppFAQItem
                        text={<>📱 Что такое Sport <span className='text-[#CF2516]'>Nutritions</span>?</>}
                        isOpen={openIndex === 0}
                        onClick={() => toggleItem(0)}
                    />
                    {openIndex === 0 && (
                        <div className="pl-[15px]">
                            <h4 className="text-[13px] font-[500] font-golos text-[#1e1e1e] tracking-[1px]">Sport <span className='text-[#CF2516]'>Nutritions</span> — это мобильное приложение, где вы можете:</h4>
                            <ul className="list-disc pl-[30px] flex flex-col gap-[12px] pt-[10px]">
                                <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                    Купить <span className='text-[#CF2516]'>питание</span>: протеины, гейнеры, аминокислоты, креатин, витамины и многое другое.
                                </li>
                                <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                    Заказать спортивные <span className='text-[#CF2516]'>аксессуары</span>: шейкеры, перчатки, ремни, бутылки, лямки и другие товары для тренировок.
                                </li>
                                <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                    Получить товар по низким ценам с <span className='text-[#CF2516]'>доставкой</span> по всей Кыргызстану — Бишкек, Ош, Каракол, Токмок и другие города.
                                </li>
                            </ul>
                        </div>
                    )}
                    <hr />

                    <AboutAppFAQItem
                        text={"💡 Преимущества приложения"}
                        isOpen={openIndex === 1}
                        onClick={() => toggleItem(1)}
                    />
                    {openIndex === 1 &&
                        (
                            <div className="flex flex-col gap-[10px] pl-[15px]">
                                <h4 className="text-[13px] font-[500] font-golos text-[#1e1e1e] tracking-[1px]">✅ Доступные цены</h4>
                                <ul className="list-disc pl-[30px] flex flex-col gap-[12px]">
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Спортивное <span className="text-[#CF2516]">питание</span> и аксессуары напрямую от поставщиков, без наценки.
                                    </li>
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Регулярные <span className="text-[#CF2516]">акции</span> и скидки.
                                    </li>
                                </ul>

                                <h4 className="text-[13px] font-[500] font-golos text-[#1e1e1e] tracking-[1px]">📦 Быстрая доставка</h4>
                                <ul className="list-disc pl-[30px] flex flex-col gap-[12px]">
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Оперативная <span className="text-[#CF2516]">доставка</span> по всей стране.
                                    </li>
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Возможность <span className="text-[#CF2516]">отслеживать</span> заказ в реальном времени.
                                    </li>
                                </ul>

                                <h4 className="text-[13px] font-[500] font-golos text-[#1e1e1e] tracking-[1px]">🛍️ Удобный каталог</h4>
                                <ul className="list-disc pl-[30px] flex flex-col gap-[12px]">
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Товары разделены по <span className="text-[#CF2516]">категориям</span>.
                                    </li>
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Удобный <span className="text-[#CF2516]">поиск</span> по бренду, типу или цели (набор массы, сушка, энергия и т.д.).
                                    </li>
                                </ul>

                                <h4 className="text-[13px] font-[500] font-golos text-[#1e1e1e] tracking-[1px]">💬 Поддержка пользователей</h4>
                                <ul className="list-disc pl-[30px] flex flex-col gap-[12px]">
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Онлайн-<span className="text-[#CF2516]">консультация</span> с менеджером.
                                    </li>
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Помощь в подборе питания под ваши цели и <span className="text-[#CF2516]">телосложение</span>.
                                    </li>
                                </ul>

                                <h4 className="text-[13px] font-[500] font-golos text-[#1e1e1e] tracking-[1px]">📲 Простой и понятный интерфейс</h4>
                                <ul className="list-disc pl-[30px] flex flex-col gap-[12px]">
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Даже <span className="text-[#CF2516]">новичку</span> легко разобраться.
                                    </li>
                                    <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                        Приложение работает <span className="text-[#CF2516]">быстро</span>, без зависаний.
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                    <hr />
                    <AboutAppFAQItem
                        text={"👥 Для кого это приложение?"}
                        isOpen={openIndex === 2}
                        onClick={() => toggleItem(2)}
                    />
                    {openIndex === 2 && (
                        <ul className="list-disc pl-[30px] flex flex-col gap-[12px]">
                            <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                <span className="text-[#CF2516]">Спортсмены</span> и бодибилдеры.
                            </li>
                            <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                Люди, следящие за <span className="text-[#CF2516]">здоровьем</span> и фигурой.
                            </li>
                            <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                Те, кто только начинает заниматься спортом и хочет поддержать организм правильным <span className="text-[#CF2516]">питанием</span>.
                            </li>
                        </ul>
                    )}

                    <hr />
                    <AboutAppFAQItem
                        text={"🏆 Заключение"}
                        isOpen={openIndex === 3}
                        onClick={() => toggleItem(3)}
                    />
                    {openIndex === 3 && (
                        <div className="pl-[15px]">
                            <h4 className="text-[13px] font-[500] font-golos text-[#1e1e1e] tracking-[1px]">Sport <span className='text-[#CF2516]'>Nutritions</span> — это идеальное решение для тех, кто хочет:</h4>
                            <ul className="list-disc pl-[30px] flex flex-col gap-[12px] pt-[10px]">
                                <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                    <span className="text-[#CF2516]">Экономить</span> на спортивном питании.
                                </li>
                                <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                    Получать <span className="text-[#CF2516]">качественные</span> товары без лишних затрат.
                                </li>
                                <li className="text-[12px] font-[500] font-popins text-[#1e1e1ee4]">
                                    <span className="text-[#CF2516]">Заказывать</span> с удобством и уверенностью.
                                </li>
                            </ul>
                        </div>
                    )}
                    <hr />
                </ul>
            </div>
        </section>
    )
}
