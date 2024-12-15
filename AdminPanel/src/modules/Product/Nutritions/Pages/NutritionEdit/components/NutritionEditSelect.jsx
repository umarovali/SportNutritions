import { useEffect, useState } from 'react';
import api from '../../../../../../utils/axiosInstance';

const NutritionEditSelectCategory = ({ category, setCategory }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/category/")
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

const NutritionEditSelectBrand = ({ brand, setBrand }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/brand/")
            .then(res => {
                setData(res.data);
            });
    }, []);

    const handleChange = (e) => {
        const selectedId = Number(e.target.value);

        if (!selectedId) {
            setBrand(null);
        } else {
            const selectedBrand = data.find((item) => item.id === selectedId);
            setBrand(selectedBrand);
        }
    };

    return (
        <select
            className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]"
            value={brand?.id || ''}
            onChange={handleChange}
        >
            {data.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    );
};

const NutritionEditSelectGoals = ({ goals, setGoals }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/goals/")
            .then(res => {
                setData(res.data);
            });
    }, []);

    const handleChange = (e) => {
        const selectedId = Number(e.target.value);

        if (!selectedId) {
            setGoals(null);
        } else {
            const selectedGoal = data.find((item) => item.id === selectedId);
            setGoals(selectedGoal);
        }
    };

    return (
        <select
            className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]"
            value={goals?.id || ''}
            onChange={handleChange}
        >
            {data.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    );
};


export { NutritionEditSelectCategory, NutritionEditSelectBrand, NutritionEditSelectGoals };