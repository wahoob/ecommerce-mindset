import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center px-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#FA8232] focus:border-[#FA8232] sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#FA8232] focus:border-[#FA8232] sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password
          </label>
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
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-900"
          >
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#FA8232] focus:border-[#FA8232] sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#FA8232] text-white text-[14px] font-bold rounded-md shadow-sm hover:bg-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#FA8232]"
          >
            Sign Up
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                color: "white",
                paddingLeft: "5px",
                fontSize: "18px",
                position: "relative",
                top: "2px",
              }}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
