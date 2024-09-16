import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import useCartContext from "../../hooks/useCartContext";
import { Cart, FilledStar, UnFilledStar } from "../../utils/icons.util";
import { Tag } from "../../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState(1);

  const { fetchSingleProduct } = useAppContext();
  const { addItem } = useCartContext();

  useEffect(() => {
    const getProductData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      getProductData();
    }
  }, [id, fetchSingleProduct]);

  let content;
  if (isLoading) {
    content = <div className="loader mb-8" />;
  } else if (!product) {
    content = <div className="text-black">No content</div>;
  } else {
    const {
      images,
      title,
      rating,
      reviews,
      sku,
      stock,
      brand,
      category,
      price,
      discountPercentage,
      description,
      tags,
    } = product;

    const inStock = stock > 0;

    const totalStars = 5;
    const filledStars = Math.ceil(rating);
    const unfilledStars = totalStars - filledStars;

    content = (
      <div className="flex flex-wrap gap-14">
        <img
          src={images[0]}
          alt={title}
          className="max-w-[38.5rem] w-full h-auto mx-auto border border-[#E4E7E9]"
        />

        <div className="flex-1 min-h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-[6px] mb-2 flex-wrap">
              <div className="flex">
                {Array.from({ length: filledStars }).map((_, index) => (
                  <FilledStar key={`filled-${index}`} />
                ))}
                {Array.from({ length: unfilledStars }).map((_, index) => (
                  <UnFilledStar key={`unfilled-${index}`} />
                ))}
              </div>

              <p className="text-[#191C1F] text-sm font-semibold">
                {rating} Star Rating{" "}
                <span className="text-[#5F6C72] font-normal">
                  ({reviews.length} User feedback)
                </span>
              </p>
            </div>

            <h2 className="text-[#191C1F] text-xl font-normal mb-4">{title}</h2>

            <div className="flex flex-col gap-2">
              <div className="flex gap-6">
                <p className="text-sm font-normal text-[#5F6C72] flex-1 whitespace-nowrap">
                  Sku: <span className="text-black font-semibold">{sku}</span>
                </p>

                <p className="text-sm font-normal text-[#5F6C72] flex-1 whitespace-nowrap">
                  Availability:{" "}
                  {inStock ? (
                    <span className="text-[#2DB224] font-semibold">
                      In Stock
                    </span>
                  ) : (
                    <span className="font-semibold text-red-600">
                      Out of Stock
                    </span>
                  )}
                </p>
              </div>

              <div className="flex gap-6">
                <p className="text-sm font-normal text-[#5F6C72] flex-1 whitespace-nowrap">
                  Brand:{" "}
                  <span className="text-black font-semibold">{brand}</span>
                </p>

                <p className="text-sm font-normal text-[#5F6C72] flex-1 whitespace-nowrap">
                  Category:{" "}
                  <span className="text-black font-semibold">{category}</span>
                </p>
              </div>
            </div>

            <div className="flex gap-3 py-6 border-b border-[#E4E7E9]">
              <div className="flex items-center gap-1">
                <p className="text-[#2DA5F3] text-2xl font-semibold">
                  ${(price - price * (discountPercentage / 100)).toFixed(2)}{" "}
                </p>
                <p className="text-[#77878F] text-lg font-normal line-through">
                  ${discountPercentage && price}
                </p>
              </div>

              <div className="bg-[#EFD33D] px-[10px] py-[5px]">
                <p className="text-[#191C1F] text-sm font-semibold">
                  {discountPercentage}% OFF
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 py-6 border-b border-[#E4E7E9]">
              <h3 className="font-semibold text-[#191C1F]">Description</h3>

              <p className="text-[#5F6C72] text-sm font-normal leading-5">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-3 py-4 w-fit">
              <h3 className="font-semibold text-[#191C1F]">Tags</h3>
              <div className="flex gap-2">
                {tags.map((tag) => (
                  <Tag key={tag} name={tag} theme="theme1" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 py-6 flex-wrap">
            <div className="py-4 px-5 flex items-center text-[#475156] text-base font-normal w-[10.25rem] border-2 border-[#E4E7E9] rounded-[3px]">
              <button
                className="text-2xl"
                onClick={() =>
                  setInput((prev) => {
                    const newVal = prev - 1;
                    return newVal > 0 ? newVal : prev;
                  })
                }
              >
                -
              </button>
              <p className="flex-1 text-center">{input}</p>
              <button
                className="text-2xl"
                onClick={() => setInput((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <button
              className="bg-[#FA8232] flex items-center gap-3 py-4 text-white text-base font-bold flex-1 justify-center w-full min-w-fit"
              onClick={() => addItem(product, input)}
            >
              <p>ADD TO CART</p>
              <Cart />
            </button>

            <button className="border-2 border-[#FA8232] px-8 py-4">
              <p className="text-[#FA8232] text-lg font-bold">BUY NOW</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 py-8">
      {content}
    </div>
  );
};

export default Product;
