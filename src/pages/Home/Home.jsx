import { useState } from "react";
import Products from "./Products";
import Sidebar from "./Sidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen 3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 pt-10 pb-[72px] grid grid-cols-1 md:grid-cols-[317px,1fr] gap-6">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Products setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      <div
        className={`md:hidden fixed z-30 bg-black inset-0 transition-opacity duration-200 ${
          isSidebarOpen ? "bg-opacity-50" : "bg-opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Home;
