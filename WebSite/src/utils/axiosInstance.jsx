import axios from 'axios';
import useTokenStore from '../layout/PublickPage/store/useTokenStore';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            const { setToken } = useTokenStore.getState();
            setToken(null);
            console.warn("Ошибка 401: токен удалён");

            window.location.href = "/";
        }

        return Promise.reject(error.response ? error.response.data : error.message);
    }
);


export default api;
