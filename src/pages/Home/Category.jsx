const Category = ({ name, isChecked, onChange }) => {
  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="radio"
        name="category"
        checked={isChecked}
        onChange={onChange}
        className="absolute opacity-0 cursor-pointer shrink-0"
      />
      <span
        className={`shrink-0 relative flex items-center justify-center size-5 rounded-full border-2 ${
          isChecked
            ? "bg-[#FA8232] border-[#FA8232]"
            : "bg-white border-[#C9CFD2]"
        }`}
      >
        {isChecked && <span className="bg-white w-1/2 h-1/2 rounded-full" />}
      </span>
      <p
        className={`ml-2 text-sm font-medium capitalize whitespace-nowrap ${
          isChecked ? "text-[#191C1F]" : "text-[#475156]"
        }`}
      >
        {name}
      </p>
    </label>
  );
};

export default Category;
