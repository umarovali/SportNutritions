import HeaderBack from '../../../../components/HeaderBack/HeaderBack';
import CatalogSearch from '../../components/CatalogSearch/CatalogSearch';
import CatalogTitle from '../../components/CatalogTitle/CatalogTitle';
import CatalogAll from "../../components/CatalogAll/CatalogAll";
export default function CategoryRoute() {
    return (
        <>
            <HeaderBack text="К" span="атегории" />
            <CatalogSearch />
            <CatalogTitle title={"Все категории"} request={"category"} />
            <CatalogAll request={"category"} />
        </>
    )
}
