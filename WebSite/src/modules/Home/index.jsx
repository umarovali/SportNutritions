import { useState } from 'react'
import HomeHeader from './Components/HomeHeader'
import SearchInput from '../../components/SearchInput/SearchInput'
import HomeBrand from './Components/HomeBrand/HomeBrand'
import HomeChoose from './Components/HomeChoose/HomeChoose'
import HomeProducts from './Components/HomeProducts/HomeProducts'
import { Outlet } from 'react-router-dom'

export default function Home() {
    const [requestText, setRequestText] = useState("nutrition");

    return (
        <>
            <HomeHeader />
            <SearchInput />
            <HomeBrand />
            <HomeChoose requestText={requestText} setRequestText={setRequestText} />
            <HomeProducts requestText={requestText} />
            <Outlet />
        </>
    )
}
