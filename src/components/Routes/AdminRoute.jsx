import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../customHooks/useAdmin";
import useAuthContext from "../../customHooks/useAuthContext";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (user && isAdmin.role === "Admin") {
    return children;
  }

  <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
