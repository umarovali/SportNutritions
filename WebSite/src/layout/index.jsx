import PrivatePage from './PrivatePage/index';
import useTokenStore from './PublickPage/store/useTokenStore';
import PublickPage from './PublickPage'

export default function index() {
    const token = useTokenStore((state) => state.token);

    if (!token) {
        return <PublickPage />;
    }

    return <PrivatePage />;
}
