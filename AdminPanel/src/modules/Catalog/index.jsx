import Catalog from "./components/Catalog";
import Brand from "./Pages/Brand";
import { Routes, Route } from "react-router-dom";

export default function CatalogRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/brand/*" element={<Brand />} />
            </Routes>
        </>
    )
}
