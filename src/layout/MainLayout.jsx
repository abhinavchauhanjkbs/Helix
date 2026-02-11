import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full min-w-0 pt-[120px] sm:pt-[110px] md:pt-[120px]">
      <Header />
      <main className="w-full min-w-0 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
