import Catalog from "./components/Catalog";
import BrandRoute from "./Pages/Brand";
import { Routes, Route } from "react-router-dom";
import CategoryRoute from "./Pages/Category";
import GoalsRoute from "./Pages/Goals";

export default function CatalogRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/brand/*" element={<BrandRoute />} />
                <Route path="/category/*" element={<CategoryRoute />} />
                <Route path="/goals/*" element={<GoalsRoute />} />
            </Routes>
        </>
    )
}
