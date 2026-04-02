import { Navigate } from "react-router-dom";
import { ADMIN_TOKEN_KEY } from "../../lib/adminAuth";

const RequireAdminAuth = ({ children }) => {
  const token = localStorage.getItem(ADMIN_TOKEN_KEY);
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
};

export default RequireAdminAuth;

