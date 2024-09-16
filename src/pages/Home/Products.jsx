import { useState } from "react";
import { Cancel, More, Search } from "../../utils/icons.util";
import useAppContext from "../../hooks/useAppContext";
import Product from "./Product";
import Pagination from "./Pagination";

const Products = ({ setIsSidebarOpen }) => {
  const [input, setInput] = useState("");
  const {
    products,
    isProductsLoading,
    isError,
    total,
    selectedCategory,
    changeCategory,
  } = useAppContext();

  const handleChange = (e) => setInput(e.target.value);

  const productsContent =
    isProductsLoading || isError ? (
      <div className="loader" />
    ) : (
      <div className="grid grid-cols-[repeat(auto-fill,minmax(11.5rem,1fr))] gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );

  const activeFilters = selectedCategory ? (
    <div className="flex items-center gap-[6px]">
      <p className="text-sm text-[#191C1F] capitalize">{selectedCategory}</p>
      <button
        className="text-[#929FA5] size-3"
        onClick={() => changeCategory("")}
      >
        <Cancel />
      </button>
    </div>
  ) : null;

  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-[424px] border border-[#E4E7E9]">
            <input
              className="w-full pl-5 pr-10 py-[14px] rounded-sm outline-0 placeholder:text-[#77878F] placeholder:text-sm font-normal"
              placeholder="Search for anything..."
              value={input}
              onChange={handleChange}
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-[14px]">
              <Search />
            </div>
          </div>

          <button
            className="size-6 text-[#191C1F] md:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <More />
          </button>
        </div>

        <div className="bg-[#F2F4F5] px-6 py-3 mt-4 mb-6 flex flex-wrap gap-4 justify-between">
          <div className="flex items-center flex-wrap gap-4">
            <p className="text-[#5F6C72] text-sm font-normal whitespace-nowrap">
              Active Filters:
            </p>
            {activeFilters}
          </div>

          <div>
            <p className="text-sm font-semibold text-[#141414]">
              {total}{" "}
              <span className="font-normal text-[#5F6C72]">Results found.</span>
            </p>
          </div>
        </div>

        {productsContent}
      </div>

      <Pagination />
    </div>
  );
};

export default Products;
