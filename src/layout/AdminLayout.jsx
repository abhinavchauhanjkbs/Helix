import { Outlet, useNavigate } from "react-router-dom";
import { clearAdminToken } from "../lib/adminAuth";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAdminToken();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200 backdrop-blur-md bg-white/90">
        <div className="flex items-center gap-3">
          <img src="/assets/HelixLogo.png" alt="Helix logo" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <div className="text-xl font-black tracking-wider text-gray-900">Helix Admin</div>
            <div className="text-xs text-gray-600">Contact submissions management</div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-[#ffb800] active:scale-[0.98] transition"
        >
          Logout
        </button>
      </div>

      <div className="px-6 pb-10 pt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

