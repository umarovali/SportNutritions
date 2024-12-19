import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import CatalogFilter from './components/CatalogFilter/CatalogFilter'
import CatalogChoose from './components/CatalogChoose'

export default function Catalog() {
    const [activeFilter, setActiveFilter] = useState("category");

    return (
        <>
            <Header text={"К"} span={"аталог"} />
            <SearchInput />
            <CatalogFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <CatalogChoose activeFilter={activeFilter} />
        </>
    )
}
