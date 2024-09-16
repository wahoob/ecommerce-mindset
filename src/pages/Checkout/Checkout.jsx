import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import check from "../../assets/imgs/CheckCircle.png";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center p-3">
        <div>
          <div className="flex justify-center items-center">
            <img
              src={check}
              alt=""
              className=" flex justify-center items-center relative text-center"
            />
          </div>
          <h1 className=" flex justify-center items-center text-4xl font-bold pt-4 text-center">
            Your order is successfully place{" "}
          </h1>
          <div className="text-sm sm:text-base flex justify-center items-center w-full sm:w-[536px] text-center text-[#475156] pt-6">
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum
            risus. Donec volutpat mollis nulla non facilisis.
          </div>
          <div className="text-base sm:flex justify-center items-center w-full sm:w-[536px] text-center pt-6 gap-4">
            <button
              className="bg-white m-6 sm:m-0 text-[#FA8232] px-6 py-2 rounded-[2px] border-[2px] border-[#FA8232]"
              onClick={() => navigate("/")}
            >
              Go to Home
            </button>
            <button className="text-white bg-[#FA8232] px-6 py-2 rounded-[2px] h-11">
              View Order
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "white", paddingLeft: "8px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
