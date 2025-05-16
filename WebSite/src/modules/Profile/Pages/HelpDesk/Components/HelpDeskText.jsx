
export default function HelpDeskText() {
    return (
        <section>
            <div className='w-full h-[52px] bg-[#fff] fixed left-[0px] top-[0px]'></div>
            <div className="container mt-[70px]">
                <i className='text-[18px] font-[600] font-popins text-[#1e1e1e] tracking-[1px]'>
                    Добро пожаловать в Службу <span className="text-[#CF2516]">поддержки</span>!
                    <hr className="my-[10px]" />
                    Если у вас возникли вопросы, проблемы или предложения по работе сервиса, пожалуйста, заполните форму ниже — мы обязательно свяжемся с вами в ближайшее время.
                </i>
            </div>
        </section>
    )
}