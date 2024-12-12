import React, { useEffect, useState } from 'react';
import api from '../../../../../utils/axiosInstance';

const NutritionAddSelectBrand = ({ setBrand }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/brand/")
            .then(res => {
                setData(res.data);
            });
    }, []);

    const handleChange = (e) => {
        setBrand(e.target.value);
    };

    return (
        <select
            className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]"
            onChange={handleChange}
        >
            <option value="">Выбрать</option>
            {data?.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    );
};

const NutritionAddSelectCategory = ({ setCategory }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/category/")
            .then(res => {
                setData(res.data);
            });
    }, []);

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <select
            className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]"
            onChange={handleChange}
        >
            <option value="">Выбрать</option>
            {data?.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    );
};

const NutritionAddSelectGoals = ({ setGoals }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get("/goals/")
            .then(res => {
                setData(res.data);
            });
    }, []);

    const handleChange = (e) => {
        setGoals(e.target.value);
    };

    return (
        <select
            className="w-[100%] h-[28px] border-[1px] border-[#A29E9E] rounded-[7px] font-openSans text-[#A29E9E] text-[14px] font-[400] flex items-center justify-start pl-[12px]"
            onChange={handleChange}
        >
            <option value="">Выбрать</option>
            {data?.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    );
};

export { NutritionAddSelectBrand, NutritionAddSelectCategory, NutritionAddSelectGoals };