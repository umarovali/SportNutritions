import Products from "../../Products/Products";
import BackHeader from "../../../components/BackHeader/BackHeader";
import { useParams } from "react-router-dom";

export default function CatalogResult() {
    const { filter } = useParams();
    const url = filter.split("=")[0]
    const newTextSingle = url === `brand` ? "Б" : url === "category" ? "К" : url === "accessoriesCategroy" ? "А" : url === "goal" ? "Ц" : ""
    const newText = url === `brand` ? "ренды" : url === "category" ? "атегории" : url === "accessoriesCategroy" ? "ксессуары" : url === "goal" ? "ели" : ""

    return (
        <>
            <BackHeader text={newTextSingle} span={newText} />
            <br />
            <br />
            <Products />
        </>
    )
}
