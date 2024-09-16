import { useState } from "react";
import {
  DownArrow,
  Facebook,
  Heart,
  Instagram,
  Logo,
  Pinterest,
  Reddit,
  Search,
  Twitter,
  User,
  Youtube,
  Cart,
} from "../utils/icons.util";
import { useNavigate } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";
import useAppContext from "../hooks/useAppContext";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { amount } = useCartContext();
  const { user, handleLogout } = useAppContext();

  const handleChange = (e) => setInput(e.target.value);

  const handleAccount = () =>
    user ? setOpen((prev) => !prev) : navigate("/user/signin");

  return (
    <nav className="bg-[#1B6392]">
      <div className=" 3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 flex flex-wrap gap-2 justify-between py-3 border-b border-white border-opacity-[16%]">
        <p className="text-xs sm:text-sm font-normal text-white">
          Welcome to Clicon online eCommerce store.
        </p>
        <div className="flex">
          <div className="flex gap-3 items-center">
            <p className="text-xs sm:text-sm font-normal text-white">
              Follow us:
            </p>
            <div className="flex gap-3 items-center flex-wrap">
              <Twitter />
              <Facebook />
              <Pinterest />
              <Reddit />
              <Youtube />
              <Instagram />
            </div>
          </div>
          <div className="h-full mx-6 w-[1px] bg-white bg-opacity-[16%] max-sm:hidden" />
          <div className="flex gap-6 max-sm:hidden">
            <div className="flex gap-[6px] items-center">
              <p className="text-sm text-white font-normal">Eng</p>
              <DownArrow />
            </div>
            <div className="flex gap-[6px] items-center">
              <p className="text-sm text-white font-normal">USD</p>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="xl:px-[300px] lg:px-36 md:px-16 px-10 flex items-center justify-between gap-x-10 gap-y-4 flex-wrap py-5">
        <div
          className="flex items-center gap-2 justify-center max-md:w-full text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo />
          <h1 className="text-[32px] text-white font-bold">CLICON</h1>
        </div>
        <div className="relative flex-1 max-w-[646px] sm:min-w-72">
          <input
            className="w-full pl-5 pr-10 py-[14px] rounded-sm outline-0 placeholder:text-[#77878F] placeholder:text-sm font-normal"
            placeholder="Search for anything..."
            value={input}
            onChange={handleChange}
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-[14px]">
            <Search />
          </div>
        </div>
        <div className="flex gap-6 items-center justify-center max-md:w-full">
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <div className="text-white">
              <Cart />
            </div>
            <div className="absolute bg-white size-4 rounded-full flex items-center justify-center -top-0.5 right-0">
              <p className="text-[#1B6392] text-xs font-semibold">{amount}</p>
            </div>
          </div>
          <div className="text-white">
            <Heart />
          </div>
          <div className="relative" onClick={handleAccount}>
            <User />
            {open && (
              <div className="bg-white text-[#191C1F] absolute px-4 py-0.5 rounded-[3px] right-0">
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
