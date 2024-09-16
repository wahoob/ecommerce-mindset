import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Apple, Google } from "../utils/icons.util";
import useAppContext from "../hooks/useAppContext";

const UserLayout = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  const { isError, isLoading, user } = useAppContext();

  useEffect(() => {
    navigate("/user/signin");
  }, [navigate]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex items-center justify-center bg-gray-100 py-[6.25rem]">
      <div className="w-96 bg-white shadow-2xl shadow-[#0000001F] border border-[#E4E7E9] rounded-lg overflow-hidden">
        <div>
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center mb-8">
              <button
                className={`w-1/2 text-[20px] font-bold py-4 border-b-2 transition-colors duration-300 ${
                  isSignIn
                    ? "border-b-[#FA8232] text-black"
                    : "border-b-gray-300 text-gray-500"
                }`}
                onClick={() => {
                  setIsSignIn(true);
                  navigate("/user/signin");
                }}
              >
                Sign In
              </button>
              <button
                className={`w-1/2 text-[20px] font-bold py-4 border-b-2 transition-colors duration-300 ${
                  !isSignIn
                    ? "border-b-[#FA8232] text-black"
                    : "border-b-gray-300 text-gray-500"
                }`}
                onClick={() => {
                  setIsSignIn(false);
                  navigate("/user/signup");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>

          <Outlet />

          {isError && <div className="mt-4 text-red-600">error</div>}
          {isLoading && <div className="loader" />}

          <div className="h-[1px] bg-[#C3C8CF] mt-7 relative mx-8">
            <span className="text-[#2E3339] text-xs absolute left-1/2 -translate-x-1/2 -top-5 p-3 bg-white">
              or
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-2 px-8 pb-8">
            <button className="flex items-center border text-[14px] border-[#C3C8CF] px-5 py-3 rounded w-full gap-4">
              <Google /> Sign up with Google
            </button>
            <button className="flex items-center border text-[14px] border-[#C3C8CF] px-5 py-3 rounded w-full gap-4">
              <Apple /> Sign up with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
