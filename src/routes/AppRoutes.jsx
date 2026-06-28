import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/property/:id"
        element={<PropertyDetails />}
        />
    </Routes>
  );
}

export default AppRoutes;