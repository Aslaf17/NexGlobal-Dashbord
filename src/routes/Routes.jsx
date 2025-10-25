import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {

    const TOKEN = localStorage.getItem("token");
    return TOKEN ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
