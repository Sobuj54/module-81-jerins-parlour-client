import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../customHooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
