import React from 'react'
import HeaderBack from '../../../../components/HeaderBack/HeaderBack'
import CatalogSearch from '../../components/CatalogSearch/CatalogSearch'
import CatalogTitle from '../../components/CatalogTitle/CatalogTitle'
import CatalogAll from '../../components/CatalogAll/CatalogAll'

export default function GoalsRoute() {
    return (
        <>
            <HeaderBack text="Ц" span="ели" />
            <CatalogSearch />
            <CatalogTitle title={"Все цели"} request={"goals"} />
            <CatalogAll request={"goals"} />
        </>
    )
}
