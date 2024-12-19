import { Route, Routes } from "react-router-dom";
import PublickPage from "./Components/PublickPage";
import Register from "./Components/Register";
import Login from "./Components/Login";

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
