import { Route, Routes } from "react-router-dom";
import Accessories from "./components/Accessories";
import AccessoriesAdd from "./Pages/AccessoriesAdd";
import AccessoriesView from "./Pages/AccessoriesView";
import AccessoriesEdit from "./Pages/AccessoriesEdit";

export default function AccesoriesRoute() {
  return (
    <Routes>
      <Route path="/" element={<Accessories />} />
      <Route path="/accessories-add/" element={<AccessoriesAdd />} />
      <Route path="/accessories-view/:id" element={<AccessoriesView />} />
      <Route path="/accessories-edit/:id" element={<AccessoriesEdit />} />
    </Routes>
  )
}
