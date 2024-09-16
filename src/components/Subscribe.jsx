import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/imgs/Logo.png";

const Subscribe = () => {
  return (
    <div className="w-full bg-[#1B6392] py-[4.5rem] 3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8">
      <div className="flex justify-center items-center text-4xl text-white font-medium pt-16 ">
        Subscribe to our newsletter
      </div>
      <div className="flex justify-center items-center text-center text-base text-[#FFFFFF] text-opacity-65 pt-7  ">
        <div className="w-[540px]">
          {" "}
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.{" "}
        </div>
      </div>
      <div className="md:flex justify-center items-center md:pt-8 md:pl-40">
        <input
          type="text"
          placeholder="        Email address"
          className="w-full md:w-[624px] h-[72px] rounded-sm m-3 md:m-0 "
        />
        <button className="w-full md:w-40 mr-3 md:m-0 h-12 bg-[#FA8232] text-white rounded-sm font-bold text-sm md:relative right-44">
          SUBSCRIBE{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "white", paddingLeft: "8px" }}
          />
        </button>
      </div>

      <div className="flex justify-center items-center pt-7">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
