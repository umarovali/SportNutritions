export default function SocialSetText() {
    return (
        <section>
            <div className='w-full h-[52px] bg-[#fff] fixed left-[0px] top-[0px]'></div>
            <div className="container mt-[70px]">
                <i className='text-[18px] font-[600] font-popins text-[#1e1e1e] tracking-[1px]'>Зачем подписываться на наши <span className='text-[#CF2516]'>соцсети</span>?</i>

                <ul className='px-[12px] flex flex-col gap-[12px] mt-[10px]'>
                    <li className='text-[13px] font-[500] font-popins text-[#1e1e1ee4]'>💪 Советы по спортивному питанию и тренировкам.</li>
                    <hr />
                    <li className='text-[13px] font-[500] font-popins text-[#1e1e1ee4]'>🥤 Подробные обзоры нашей продукции.</li>
                    <hr />
                    <li className='text-[13px] font-[500] font-popins text-[#1e1e1ee4]'>🔥 Актуальные акции и эксклюзивные скидки.</li>
                    <hr />
                    <li className='text-[13px] font-[500] font-popins text-[#1e1e1ee4]'>📦 Реальные отзывы и истории наших клиентов.</li>
                    <hr />
                    <li className='text-[13px] font-[500] font-popins text-[#1e1e1ee4]'>🤝 Ответы на ваши вопросы и персональные рекомендации.</li>
                </ul>
            </div>
        </section>
    )
}
