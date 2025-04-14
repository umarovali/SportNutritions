import { useEffect, useState } from 'react';
import api from '../../../../../../utils/axiosInstance';

const AccessoriesEditSelect = ({ category, setCategory }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/access/category/")
            .then(res => {
                setData(res.data);
            });
    }, []);

    const handleChange = (e) => {
        const selectedId = Number(e.target.value);
        if (!selectedId) {
            setCategory(null);
        } else {
            const selectedCategory = data.find((item) => item.id === selectedId);
            setCategory(selectedCategory);
        }
    };

    return (
        <select
            className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]"
            value={category?.id || ''}
            onChange={handleChange}
        >
            {data.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    );
};


export { AccessoriesEditSelect };