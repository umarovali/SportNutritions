import { Route, Routes } from "react-router-dom";
import PublickPage from "./Pages/PublickPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

export default function RoutePublick() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PublickPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
