import HeaderBack from "../../../../components/HeaderBack/HeaderBack";
import CatalogSearch from "../../components/CatalogSearch/CatalogSearch";
import CatalogAll from "../../components/CatalogAll/CatalogAll";
import CatalogTitle from "../../components/CatalogTitle/CatalogTitle";

export default function BrandRoute() {

    return (
        <>
            <HeaderBack text="Б" span="ренды" />
            <CatalogSearch />
            <CatalogTitle title={"Все бреннды"} request={"brand"} />
            <CatalogAll request={"brand"} />
        </>
    )
}
