import PrivatePage from "./PrivatePage";
import Login from "./PublickPage/Login";
import useTokenStore from "./PublickPage/store/useTokenStore";

export default function Layout() {
    const token = useTokenStore((state) => state.token);

    if (!token) {
        return <Login />;
    }

    return <PrivatePage />;
}
