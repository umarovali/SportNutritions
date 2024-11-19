import React from 'react'
import HomeHeader from './Components/HomeHeader'
import SearchInput from '../../components/SearchInput/SearchInput'
import HomeBrand from './Components/HomeBrand/HomeBrand'
import HomeChoose from './Components/HomeChoose/HomeChoose'
import HomeProducts from './Components/HomeProducts/HomeProducts'

export default function Home() {
    return (
        <>
            <HomeHeader />
            <SearchInput />
            <HomeBrand />
            <HomeChoose />
            <HomeProducts />
        </>
    )
}
