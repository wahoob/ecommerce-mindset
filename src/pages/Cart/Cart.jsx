import { useNavigate } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";
import { LeftArrow, RightArrow } from "../../utils/icons.util";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, total, clearCart } = useCartContext();

  const navigate = useNavigate();

  const checkout = () => {
    clearCart();
    navigate("/checkout");
  };

  return (
    <div className="3xl:px-[300px] 2xl:px-52 xl:px-36 lg:px-16 px-8 py-[4.5rem] flex max-xl:flex-col gap-6 items-start">
      <div className="border border-[#E4E7E9] rounded-[4px] flex-1 w-full flex flex-col justify-between pb-5">
        <div>
          <h3 className="text-[#191C1F] text-lg font-medium py-5 px-6">
            Shopping Cart
          </h3>

          <div className="border border-[#E4E7E9] bg-[#F2F4F5] px-6 py-[10px] grid grid-cols-[3fr,1fr] sm:grid-cols-[3fr,1.5fr,1fr] md:grid-cols-[3fr,1fr,1.5fr,1fr] gap-6 text-[#475156] text-xs font-medium">
            <p>PRODUCT</p>
            <p className="max-md:hidden">PRICE</p>
            <p className="max-sm:hidden">QUANTITY</p>
            <p>SUB-TOTAL</p>
          </div>

          <div className="flex flex-col gap-4 p-4 border-b border-[#E4E7E9]">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div className="px-6 pt-6 flex justify-between items-center flex-wrap gap-6">
          <button
            className="border-2 border-[#2DA5F3] rounded-sm flex items-center gap-2 px-6 py-3"
            onClick={() => navigate("/")}
          >
            <div className="text-[#2DA5F3]">
              <LeftArrow />
            </div>
            <p className="text-sm font-bold text-[#2DA5F3]">RETURN TO SHOP</p>
          </button>

          <button
            className="text-sm font-bold text-[#2DA5F3] border-2 border-[#2DA5F3] rounded-sm px-6 py-3"
            onClick={() => clearCart()}
          >
            CLEAR CART
          </button>
        </div>
      </div>

      <div className="xl:max-w-[26.5rem] max-xl:w-full border border-[#E4E7E9] px-6 pb-5">
        <h3 className="text-[#191C1F] text-lg font-medium py-5">Cart Totals</h3>

        <div className="pb-5 border-b border-[#E4E7E9] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-[#5F6C72] text-sm">Sub-total</p>
            <p className="text-[#191C1F] text-sm font-medium">${total}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#5F6C72] text-sm">Shipping</p>
            <p className="text-[#191C1F] text-sm font-medium">Free</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#5F6C72] text-sm">Tax</p>
            <p className="text-[#191C1F] text-sm font-medium">$61.99</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 pb-5">
          <p className="text-[#191C1F]">Total</p>
          <p className="text-[#191C1F] font-semibold">
            ${(total + 61.99).toFixed(2)}
          </p>
        </div>

        <button
          className="bg-[#FA8232] text-white px-8 py-4 flex items-center gap-3 rounded-[3px] w-full justify-center"
          onClick={checkout}
        >
          <p className="max-sm:text-sm">PROCEED TO CHECKOUT</p>
          <div className="text-white size-4">
            <RightArrow />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cart;
