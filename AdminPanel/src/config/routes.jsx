import Nutritions from "../modules/Nutritions";
import Catalog from "../modules/Catalog";
import { Navigate } from "react-router-dom";

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
    ];
};
