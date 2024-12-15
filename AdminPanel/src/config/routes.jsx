import Nutritions from "../modules/Product/Nutritions";
import Catalog from "../modules/Catalog";
import { Navigate } from "react-router-dom";
import Accesories from "../modules/Product/Accesories";

export const routes = () => {
    return [
        {
            id: 1,
            path: "/",
            element: <Navigate to="/nutritions" replace />,
        },
        {
            id: 2,
            path: "/nutritions/*", 
            element: <Nutritions />,
        },
        {
            id: 3,
            path: "/catalog/*", 
            element: <Catalog />,
        },
        {
            id: 4,
            path: "/accesories/*", 
            element: <Accesories />,
        },
    ];
};
