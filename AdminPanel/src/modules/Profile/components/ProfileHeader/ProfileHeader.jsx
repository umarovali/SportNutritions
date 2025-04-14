import { useState } from "react";
import ProfileEdit from "../../Modals/ProfileEdit/ProfileEdit";
import AvatarFoto from "../../../../assets/images/avatar.avif";

export default function ProfileHeader({ user, setUser }) {
    const [modal, setModal] = useState(true);

    return (
        <>
            <header className="mt-[10px]">
                <div className="container">
                    <div onClick={() => setModal(!modal)} className="flex items-center gap-[10px] cursor-pointer">
                        <img className="border-[2px] border-light shadow-sm w-[60px] h-[60px] rounded-full object-cover" src={user.data.avatar || AvatarFoto} alt="" />
                        <div>
                            <h1 className="text-[#1e1e1e] font-golos text-[20px] pt-[0px] leading-[6px]">{user.data.username}</h1>
                            <p className="text-[#1e1e1e] font-golos text-[12px] pt-[20px] leading-[0px]">изменить</p>
                        </div>
                    </div>
                </div>
            </header>

            <ProfileEdit setUser={setUser} user={user} modal={modal} setModal={setModal} />
        </>
    )
}
