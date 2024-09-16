import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export default function useCartContext() {
  return useContext(CartContext);
}
