import React from 'react'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import CatalogFilter from './components/CatalogFilter/CatalogFilter'
import CatalogChoose from './components/CatalogChoose'

export default function Catalog() {
    return (
        <>
            <Header />
            <SearchInput />
            <CatalogFilter />
            <CatalogChoose />
        </>
    )
}
