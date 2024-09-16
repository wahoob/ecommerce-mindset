const Tag = ({ name, theme = "theme2" }) => {
  const borderColor = theme === "theme1" ? "#E4E7E9" : "#303639";
  const textColor = theme === "theme1" ? "#191C1F" : "white";

  return (
    <div
      className={`py-[6px] px-3 border border-${borderColor} rounded-sm shrink-0`}
    >
      <p className={`text-${textColor} font-medium text-sm whitespace-nowrap`}>
        {name}
      </p>
    </div>
  );
};

export default Tag;
