import { Action } from "@remix-run/router";
import { createContext, useReducer } from "react";
import { useAppContext } from "../hook/useAppContext";

export const ShopPingCartContext = createContext({});

export const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      // kiem tra xem da co san pham do trong cua hang hay chua
      const exits = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (exits) {
        const newItems = state.items.map((item) =>
          item.productId === exits.productId
            ? {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              }
            : item
        );
        return { ...state, items: newItems };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }
    }
    case "INCREASE_QUANTITY": {
    }
    case "DECREASE_QUANTITY": {
    }
    case "REMOVE_ITEM": {
    

    }
    case "CLEAR_ITEM": {
    }
    default: {
      throw new Error("Invalid action type");
    }
  }
};
const innitialState = {
  items: [],
};

const ShoppingCartProvide = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer,  innitialState );
  const { findProductId } = useAppContext();
  const handleAddItem = ({ productId, quantity = 1 }) => {
    dispatch({ type: "ADD_ITEM", payload: { productId, quantity } });
  };

    const totalItems = state.items.length;

    const items = state .items.map((item)=>({
      product: findProductId(item.productId),
      quantity:item.quantity,
    }))

  return (
    <ShopPingCartContext.Provider
      value={{ ...state,items,totalItems, onAddItem: handleAddItem }}
    >
      {children}
    </ShopPingCartContext.Provider>
  );
};
export default ShoppingCartProvide;
