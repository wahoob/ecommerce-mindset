import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useAppContext from "../../hooks/useAppContext";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handlesignIn } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    handlesignIn(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-8">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-900"
        >
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#FA8232] focus:border-[#FA8232] sm:text-sm"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-[#2DA5F3] hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#FA8232] focus:border-[#FA8232] sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex items-center justify-center w-full py-2 px-4 bg-[#FA8232] text-white text-[14px] font-bold rounded-md shadow-sm hover:bg-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#FA8232]"
        >
          <p>Sign In</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              color: "white",
              paddingLeft: "5px",
              fontSize: "18px",
              position: "relative",
              top: "1px",
            }}
          />
        </button>
      </div>
    </form>
  );
};

export default Signin;
