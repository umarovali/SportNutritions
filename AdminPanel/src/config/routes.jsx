import Nutritions from "../modules/Product/Nutritions";
import Catalog from "../modules/Catalog";
import { Navigate } from "react-router-dom";
import Accesories from "../modules/Product/Accesories";
import Profile from "../modules/Profile/index";

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
        {
            id: 5,
            path: "/profile/*", 
            element: <Profile />,
        },
    ];
};
