import Header from "../../../components/Header/Header";
import CatalogChoose from "./CatalogChoose/CatalogChoose";
import CatalogTitle from "./CatalogTitle/CatalogTitle";

export default function Catalog() {
    return (
        <>
            <Header text="К" span="аталоги" />
            <CatalogChoose />
        </>
    )
}
