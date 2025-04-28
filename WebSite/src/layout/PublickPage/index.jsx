import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useEffect, useState } from "react";
import PublickPage from "./Pages/PublickPage";

export default function RoutePublick() {
    const [show, setShow] = useState(() => {
        const saved = localStorage.getItem("showPublicPage");
        return saved === null ? true : JSON.parse(saved);
    });

    useEffect(() => {
        localStorage.setItem("showPublicPage", JSON.stringify(show));
    }, [show]);

    if (show) {
        return <PublickPage setShow={setShow} />;
    }

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
