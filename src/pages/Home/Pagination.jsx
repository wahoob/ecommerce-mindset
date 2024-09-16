import useAppContext from "../../hooks/useAppContext";
import { LeftArrow, RightArrow } from "../../utils/icons.util";

const Pagination = () => {
  const { pages, isProductsLoading, currentPage, changePage } = useAppContext();

  const increasePage = () =>
    currentPage !== pages && changePage(currentPage + 1);

  const decreasePage = () => currentPage !== 1 && changePage(currentPage - 1);

  const maxPagesToShow = 6;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(pages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const content = isProductsLoading ? (
    <div className="loader mx-4" />
  ) : (
    <div className="mt-10 flex items-center gap-5 mx-auto w-fit">
      <button
        className="border-[1.5px] border-[#FA8232] size-10 flex items-center justify-center"
        onClick={decreasePage}
      >
        <div className="text-[#FA8232]">
          <LeftArrow />
        </div>
      </button>

      <div className="flex items-center gap-2 max-sm:hidden">
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i - 1
        ).map((page) => (
          <button
            key={page}
            className={`text-sm border size-10 rounded-full ${
              currentPage === page + 1
                ? "bg-[#FA8232] border-[#FA8232] text-white"
                : "border-[#E4E7E9] text-[#191C1F]"
            }`}
            onClick={() => changePage(page + 1)}
          >
            {page + 1}
          </button>
        ))}
      </div>

      <button
        className="border-[1.5px] border-[#FA8232] size-10 flex items-center justify-center"
        onClick={increasePage}
      >
        <div className="size-6 text-[#FA8232]">
          <RightArrow />
        </div>
      </button>
    </div>
  );

  return content;
};

export default Pagination;
