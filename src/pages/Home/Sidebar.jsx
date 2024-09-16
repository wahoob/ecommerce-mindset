import useAppContext from "../../hooks/useAppContext";
import Category from "./Category";
import { Tag } from "../../components";

const tags = [
  "Game",
  "iPhone",
  "TV",
  "Asus Laptops",
  "Macbook",
  "SSD",
  "Graphics",
  "Power Bank",
  "Smart TV",
  "Speaker",
  "Tablet",
  "Microwave",
  "Samsung",
];

const Sidebar = ({ isSidebarOpen }) => {
  const {
    isCategoriesLoading,
    isError,
    categories,
    changeCategory,
    selectedCategory,
  } = useAppContext();

  const handleCategoryChange = (category) => changeCategory(category);

  const categoryContent =
    isCategoriesLoading || isError ? (
      <div className="loader" />
    ) : (
      <div className="flex flex-col gap-3">
        {categories.map((category, index) => (
          <Category
            key={index}
            name={category.slug}
            isChecked={selectedCategory === category.slug}
            onChange={() => handleCategoryChange(category.slug)}
          />
        ))}
      </div>
    );

  return (
    <div
      className={`max-md:fixed top-0 left-0 transition-all duration-200 max-w-fit bg-white z-50 max-md:p-4 overflow-hidden min-h-full ${
        isSidebarOpen ? "w-[317px]" : "max-md:w-10 max-md:invisible"
      }`}
    >
      <div className="pb-6 border-b border-[#E4E7E9]">
        <h3 className="text-[#191C1F] font-medium mb-4">CATEGORY</h3>

        {categoryContent}
      </div>

      <div className="py-6 flex flex-col">
        <h3 className="text-[#191C1F] font-medium mb-[18px]">POPULAR TAG</h3>

        <div className="flex flex-wrap gap-2 overflow-hidden">
          {tags.map((tag, index) => (
            <Tag key={index} name={tag} theme="theme1" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
