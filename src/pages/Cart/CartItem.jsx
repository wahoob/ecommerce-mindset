import { useState } from "react";
import { Cancel } from "../../utils/icons.util";
import useCartContext from "../../hooks/useCartContext";

const CartItem = ({ images, title, amount, discountPercentage, price, id }) => {
  const [input, setInput] = useState(amount);

  const { increaseItem, decreaseItem, removeItem } = useCartContext();

  const finalPrice = discountPercentage
    ? (price - price * (discountPercentage / 100)).toFixed(2)
    : price;

  const handleQuantityChange = (increment) => {
    increment ? increaseItem(id) : decreaseItem(id);
    setInput((prev) => (increment ? prev + 1 : prev - 1));
  };

  return (
    <div className="grid grid-cols-[3fr,1fr] sm:grid-cols-[3fr,1.5fr,1fr] md:grid-cols-[3fr,1fr,1.5fr,1fr] items-center gap-6 py-4">
      <div className="w-fit flex items-center gap-3">
        <button
          className="border-2 border-[#929FA5] rounded-full p-0.5"
          onClick={() => removeItem(id)}
        >
          <div className="text-[#929FA5] size-3">
            <Cancel />
          </div>
        </button>
        <img
          src={images[0]}
          alt={title}
          className="size-[4.5rem] object-contain max-sm:hidden"
        />
        <p className="text-sm font-normal leading-5 text-[#191C1F] line-clamp-2">
          {title}
        </p>
      </div>

      <div className="flex items-center gap-1 max-md:hidden">
        {discountPercentage && (
          <p className="text-sm line-through text-[#929FA5]">${price}</p>
        )}

        <p className="text-sm text-[#475156]">${finalPrice}</p>
      </div>

      <div className="px-5 py-2 flex items-center text-[#475156] text-base font-normal w-32 max-sm:hidden md:w-[10.25rem] border-2 border-[#E4E7E9] rounded-[3px]">
        <button
          className="text-2xl"
          onClick={() => handleQuantityChange(false)}
        >
          -
        </button>
        <p className="flex-1 text-center">{input}</p>
        <button className="text-2xl" onClick={() => handleQuantityChange(true)}>
          +
        </button>
      </div>

      <p className="text-[#191C1F] text-sm font-medium">
        ${(finalPrice * amount).toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
