import { useContext } from "react";
import { ShopPingCartContext } from "../contax/ShoppingCartContext";

export const useShoppingCartContext = () =>{
    const context = useContext(ShopPingCartContext)
    return {...context}

};

