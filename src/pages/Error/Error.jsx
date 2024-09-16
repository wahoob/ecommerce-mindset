import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import not from "../../assets/imgs/not.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen w-full  sm:flex justify-center items-center p-3">
        <div>
          <img src={not} alt="" />
          <h1 className=" flex justify-center items-center text-4xl font-bold">
            404, Page not founds
          </h1>
          <div className="text-sm sm:text-base flex justify-center items-center w-full sm:w-[536px]    text-center text-[#475156] p-6">
            Something went wrong. It’s look that your requested could not be
            found. It’s look like the link is broken or the page is removed.
          </div>
          <div className="text-base  sm:flex justify-center items-center w-full sm:w-[536px] text-center pt-6 gap-4">
            <button
              className="text-white  m-6 sm:m-0 bg-[#FA8232] px-6 py-2 rounded-[2px] h-11"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "white", paddingRight: "5px" }}
              />{" "}
              Go Back
            </button>
            <button
              className="bg-white   text-[#FA8232] px-6 py-2 rounded-[2px] border-[2px] border-[#FA8232]"
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon
                icon={faHouse}
                style={{ color: "#fa8232", paddingRight: "5px" }}
              />
              Go Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
