import { Outlet, useLocation } from "react-router-dom";
import { Header, Navbar, Footer } from "../components";

const MainLayout = () => {
  const location = useLocation();

  const isRootPath = /^\/$/.test(location.pathname);
  return (
    <>
      {!isRootPath && <Header />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
