import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./../context/AuthContext.";

const PrivateRoute = ({ children }) => {
  const { current } = useAuth();
  return current ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
