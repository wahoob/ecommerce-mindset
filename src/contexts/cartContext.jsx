import { createContext, useReducer } from "react";

export const CartContext = createContext({});

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
};

const ACTIONS = {
  ADD_ITEM: "add_item",
  REMOVE_ITEM: "remove_item",
  CLEAR: "clear",
  INC: "increase",
  DEC: "decrease",
  GET_TOTAL: "get_total",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.CLEAR:
      return {
        ...state,
        cart: [],
      };
    case ACTIONS.ADD_ITEM: {
      let tempCart = state.cart.find((item) => item.id === payload.id);
      if (tempCart) {
        tempCart = { ...tempCart, amount: tempCart.amount + payload.amount };
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === payload.id ? tempCart : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...payload, amount: payload.amount }],
        };
      }
    }
    case ACTIONS.REMOVE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    }
    case ACTIONS.INC: {
      let tempCart = state.cart.map((item) => {
        if (item.id === payload.id) {
          const { amount } = item;
          return { ...item, amount: amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      };
    }
    case ACTIONS.DEC: {
      let tempCartt = state.cart
        .map((item) => {
          if (item.id === payload.id) {
            const { amount } = item;
            return { ...item, amount: amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {
        ...state,
        cart: tempCartt,
      };
    }
    case ACTIONS.GET_TOTAL: {
      const { amount, total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { amount, price, discountPercentage } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += amount * price * (1 - discountPercentage / 100);
          return cartTotal;
        },
        {
          amount: 0,
          total: 0,
        }
      );
      return {
        ...state,
        amount,
        total: parseFloat(total.toFixed(2)),
      };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };
  const addItem = (item, amount) => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: { ...item, amount } });
    dispatch({ type: ACTIONS.GET_TOTAL });
  };
  const removeItem = (id) => {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id } });
    dispatch({ type: ACTIONS.GET_TOTAL });
  };
  const increaseItem = (id) => {
    dispatch({ type: ACTIONS.INC, payload: { id } });
    dispatch({ type: ACTIONS.GET_TOTAL });
  };
  const decreaseItem = (id) => {
    dispatch({ type: ACTIONS.DEC, payload: { id } });
    dispatch({ type: ACTIONS.GET_TOTAL });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        increaseItem,
        decreaseItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
