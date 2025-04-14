import { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import api from "../../../utils/axiosInstance";
import ProfileBg from "./ProfileBg/ProfileBg";

export default function Profile() {
    const [user, setUser] = useState({
        isLoading: true,
        isError: false,
        data: {},
    })

    useEffect(() => {
        api("/user/me/")
            .then((data) => setUser({
                isLoading: false,
                isError: false,
                data: data.data,
            }))
            .catch(() => setUser({
                isLoading: false,
                isError: true,
                data: {},
            }))
    }, [])


    return (
        <>
            <ProfileHeader user={user} setUser={setUser} />
            <h1 className="font-grechen relative text-[#1e1e1e] text-[40px] tracking-[3px] pt-[44px] text-center font-bold z-[-100]">Sport <span className="text-[#CF2516]">Nutritions</span></h1>
            <ProfileBg />
        </>
    )
}
