import { useState } from "react";
import { Cancel, RightArrow } from "../utils/icons.util";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => setOpen((prev) => !prev);

  return (
    <header
      className={`bg-[#191C1F] flex items-center justify-between 3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 py-4 relative max-md:hidden ${
        !open && "hidden"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="bg-[#F3DE6D] py-[6px] px-[10px] -rotate-3">
          <p className="text-xl font-semibold text-[#191C1F]">Black</p>
        </div>
        <h4 className="text-2xl font-semibold text-white">Friday</h4>
      </div>
      <div className="flex items-center gap-2 text-white">
        <p className="text-sm font-medium">Up to</p>
        <h3 className="text-[40px] font-semibold text-[#EBC80C]">59%</h3>
        <p className="text-xl font-semibold">OFF</p>
      </div>
      <button className="bg-[#EBC80C] px-6 py-[14px] flex items-center gap-2 rounded-sm">
        <Link to="/" className="text-sm text-[#191C1F] font-bold uppercase">
          Shop now
        </Link>
        <div className="text-[#191C1F] size-5">
          <RightArrow />
        </div>
      </button>

      {/* close */}
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#303639] p-2 rounded-sm max-lg:hidden"
        onClick={handleClick}
      >
        <div className="text-white size-4">
          <Cancel />
        </div>
      </button>
    </header>
  );
};

export default Header;
