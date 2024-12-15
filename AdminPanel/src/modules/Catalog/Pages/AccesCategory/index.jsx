import HeaderBack from "../../../../components/HeaderBack/HeaderBack";
import CatalogAll from "../../components/CatalogAll/CatalogAll";
import CatalogSearch from "../../components/CatalogSearch/CatalogSearch";
import CatalogTitle from "../../components/CatalogTitle/CatalogTitle";

export default function AccesCategoryRoute() {
    return (
        <div>
            <HeaderBack text="А" span="ксессуары" />
            <CatalogSearch />
            <CatalogTitle title={"Все аксессуары"} request={"access/category"} />
            <CatalogAll request={"access/category"} />
        </div>
    )
}
