import Home from "../modules/Home";
import Catalog from "../modules/Catalog";
import Cart from "../modules/Cart/Cart";
import Profile from "../modules/Profile/Profile";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import Products from "../modules/Products/Products";

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
            path: "/catalog/:filter",
            element: <Products />,
        },
        {
            id: 4,
            path: "/cart/*",
            element: <Cart />,
        },
        {
            id: 5,
            path: "/profile/*",
            element: <Profile />,
        },
        {
            id: 6,
            path: "/:id",
            element: <SingleProduct />,
        },
    ];
};