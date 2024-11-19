import Logo from "../../../assets/icons/logo.svg";
import Avatar from "../../../assets/icons/profile.svg";

export default function HomeHeader() {
    return (
        <header>
            <div className="container">
                <div className='flex justify-between items-center pt-[10px]'>
                    <div className="flex items-center gap-[10px]">
                        <img src={Logo} alt="Logo" />
                        <h1 className="text-[#1E1E1E] font-golos text-[20px] font-[500]">Sport Nutrition</h1>
                    </div>

                    <img src={Avatar} alt="Avatar" />
                </div>
            </div>
        </header>
    )
}
