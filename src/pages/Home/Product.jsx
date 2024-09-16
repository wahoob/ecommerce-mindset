import { useNavigate } from "react-router-dom";
import {
  Cart,
  Eye,
  FilledStar,
  Heart,
  UnFilledStar,
} from "../../utils/icons.util";
import useCartContext from "../../hooks/useCartContext";

const Product = ({ product }) => {
  const { images, title, reviews, price, id, rating } = product;

  const navigate = useNavigate();

  const { addItem } = useCartContext();

  const viewProduct = () => navigate(`/product/${id}`);

  const totalStars = 5;
  const filledStars = Math.ceil(rating);
  const unfilledStars = totalStars - filledStars;

  return (
    <div className="border border-[#E4E7E9] rounded-[3px] p-4 h-80 flex flex-col gap-6 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="object-contain w-full max-w-[12.625rem] h-[10.75rem] mx-auto"
        />

        <div className="absolute flex items-center gap-2 z-20 transition-all duration-300 top-1/2 group-hover:left-1/2 left-full group-hover:-translate-x-1/2 -translate-y-1/2">
          <button className="bg-white size-12 flex items-center justify-center rounded-full">
            <div className="text-[#191C1F]">
              <Heart />
            </div>
          </button>
          <button
            className="bg-white size-12 flex items-center justify-center rounded-full"
            onClick={() => addItem(product, 1)}
          >
            <div className="text-[#191C1F]">
              <Cart />
            </div>
          </button>
          <button
            className="bg-[#FA8232] size-12 flex items-center justify-center rounded-full"
            onClick={viewProduct}
          >
            <div className="text-[#191C1F]">
              <Eye />
            </div>
          </button>
        </div>
        <div className="bg-transparent group-hover:bg-[#00000033] absolute inset-0 z-10 transition-all" />
      </div>

      <div className="flex flex-col gap-2 justify-between flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {Array.from({ length: filledStars }).map((_, index) => (
                <FilledStar key={`filled-${index}`} />
              ))}
              {Array.from({ length: unfilledStars }).map((_, index) => (
                <UnFilledStar key={`unfilled-${index}`} />
              ))}
            </div>
            <p className="text-[#77878F] text-xs font-normal">
              ({reviews.length})
            </p>
          </div>

          <div>
            <p className="line-clamp-2 text-sm font-normal text-[#191C1F]">
              {title}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#2DA5F3] font-semibold text-sm">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
