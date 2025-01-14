
export default function ProfileHeader({user}) {
    return (
        <header className="mt-[10px]">
            <div className="container">
                <div className="flex items-center gap-[10px]">
                    <img className="border-[2px] border-light shadow-sm w-[60px] h-[60px] rounded-full object-cover" src="https://img.freepik.com/premium-photo/music-default-profile-photo-head-face-silhouette-male-user-avatar-business_817921-70623.jpg" alt="" />
                    <div>
                        <h1 className="text-[#1e1e1e] font-golos text-[20px] pt-[0px] leading-[6px]">{user.data.username}</h1>
                        <p className="text-[#1e1e1e] font-golos text-[12px] pt-[20px] leading-[0px]">изменить</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
