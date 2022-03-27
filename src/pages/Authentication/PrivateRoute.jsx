import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/auth.context"

export const PrivateRoute = () => {
    const {isUserLoggedIn} = useAuth();

    return isUserLoggedIn ? <Outlet /> : <Navigate to="/login"/>
}