import Home from "../modules/Home";
import Catalog from "../modules/Catalog";
import Cart from "../modules/Cart/Cart";
import Profile from "../modules/Profile/Profile";

export const routes = () => {

    return [
        {
            id: 1,
            path: "/",
            element: <Home />,
        },
        {
            id: 2,
            path: "/catalog/*",
            element: <Catalog />,
        },
        {
            id: 3,
            path: "/cart/*",
            element: <Cart />,
        },
        {
            id: 4,
            path: "/profile/*",
            element: <Profile />,
        },
    ];
};