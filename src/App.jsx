import { lazy, Suspense, useLayoutEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import RequireAdminAuth from "./components/admin/RequireAdminAuth";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Products = lazy(() => import("./pages/Products"));
const Solutions = lazy(() => import("./pages/Solutions"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Careers = lazy(() => import("./pages/Careers"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminNotFound = lazy(() => import("./pages/admin/NotFound"));

// Scroll to top immediately on every route change (before paint)
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="animate-pulse text-primary font-semibold">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/admin/login" element={<AdminLogin />} />

            <Route path="/admin" element={<AdminLayout />}>
              <Route
                index
                element={
                  <RequireAdminAuth>
                    <AdminDashboard />
                  </RequireAdminAuth>
                }
              />
              <Route
                path="dashboard"
                element={
                  <RequireAdminAuth>
                    <AdminDashboard />
                  </RequireAdminAuth>
                }
              />
              <Route path="*" element={<AdminNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
