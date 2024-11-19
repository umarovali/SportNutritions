export default function Header({ text, span }) {
    return (
        <header className='w-[100%] h-[60px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] flex items-center fixed left-0 top-0 bg-[#fff] z-[1000]'>
            <div className="container">
                <h1 className='font-golos font-[500] text-[22px] text-[#1E1E1E]'>{text}<span className="text-[#CF2516]">{span}</span></h1>
            </div>
        </header>
    )
}
