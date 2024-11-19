import HeaderBack from "../../../../components/HeaderBack/HeaderBack";
import CatalogSearch from "../../components/CatalogSearch/CatalogSearch";
import Brand from "./components/Brand/Brand";
import BrandTitle from "./components/BrandTitle/BrandTitle";

export default function BrandRoute() {
    return (
        <>
            <HeaderBack text="Б" span="ренды" />
            <CatalogSearch />
            <BrandTitle />
            <Brand />
        </>
    )
}
