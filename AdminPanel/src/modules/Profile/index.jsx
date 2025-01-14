import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";
import api from "../../utils/axiosInstance";


export default function index() {
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
            <ProfileHeader user={user} />
            {/* <Header text={"П"} span={"рофиль"} /> */}
            <h1 className="font-grechen relative text-[#1e1e1e] text-[40px] tracking-[3px] pt-[44px] text-center font-bold">Sport <span className="text-[#CF2516]">Nutritions</span></h1>
        </>
    )
}
