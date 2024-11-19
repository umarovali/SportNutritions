import Nutritions from "../modules/Nutritions";
import Catalog from "../modules/Catalog"

export const routes = () => {

    return [
        {
            id: 1,
            path: "/",
            element: <Nutritions />,
        },
        {
            id: 2,
            path: "/catalog/*",
            element: <Catalog />,
        },
    ];
};