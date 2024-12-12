import NutritionsAdd from "./Pages/NutritionsAdd";
import { Route, Routes } from "react-router-dom";
import Nutritions from "./components/Nutritions";
import NutritionsView from "./Pages/NutritionsView";
import NutritionEdit from "./Pages/NutritionEdit";

export default function NutritionsRoute() {
    return (
        <Routes>
            <Route path="/" element={<Nutritions />} />
            <Route path="/nutrition-add/" element={<NutritionsAdd />} />
            <Route path="/nutrition-view/:id" element={<NutritionsView />} />
            <Route path="/nutrition-edit/:id" element={<NutritionEdit />} />
        </Routes>
    )
}
