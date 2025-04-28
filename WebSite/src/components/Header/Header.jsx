export default function Header({ text, span }) {
    return (
        <header className='pl-[16px] flex items-center fixed left-0 top-0 z-[1000] bg-[#fff] w-full h-[50px] shadow-[-1px_-0.5px_4px_0px_rgba(0,0,0,0.25)]'>
            <h1 className='font-golos font-[500] text-[22px] text-[#1E1E1E] z-1000'>{text}<span className='text-[#CF2516]'>{span}</span></h1>
        </header>
    )
}
