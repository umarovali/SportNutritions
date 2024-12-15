import Catalog from "./components/Catalog";
import BrandRoute from "./Pages/Brand";
import { Routes, Route } from "react-router-dom";
import CategoryRoute from "./Pages/Category";
import GoalsRoute from "./Pages/Goals";
import AccesCategoryRoute from "./Pages/AccesCategory";

export default function CatalogRoute() {
    return (
        <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/brand/*" element={<BrandRoute />} />
            <Route path="/category/*" element={<CategoryRoute />} />
            <Route path="/goals/*" element={<GoalsRoute />} />
            <Route path="/access-category/*" element={<AccesCategoryRoute />} />
        </Routes>
    )
}
