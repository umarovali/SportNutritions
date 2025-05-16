import BackHeader from "../../../../components/BackHeader/BackHeader";

export default function AddresShop() {
    return (
        <>
            <BackHeader text={"Аддрес "} span={"магазина"} />
            <section>
                <div className='w-full h-[52px] bg-[#fff] fixed left-[0px] top-[0px]'></div>
                <div className="container mt-[270px]">
                    <center>
                        <i className='text-[18px] font-[600] font-popins text-[#1e1e1e] tracking-[1px]'>
                            Данная страница
                            находиться на стадии
                            разработки
                        </i>
                    </center>
                </div>
            </section>
        </>
    )
}
