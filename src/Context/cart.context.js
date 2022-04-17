import { createContext, useContext, useReducer, useEffect} from "react";
import { postCartItems, getCartItemsFromServer } from "../api-calls";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const addToCart = (product) => {
        postCartItems(product, dispatch)
    }

    const [state, dispatch] = useReducer(cartReducer, {cart: []});

    useEffect(() => {
        getCartItemsFromServer(dispatch);
    }, []); 
    
    return (
        <CartContext.Provider value={{cart: state.cart, cartDispatch: dispatch, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case "SET_CART":
            return {
                ...state, 
                cart: action.payload
            }

            default: 
            return {...state}
    }
} 

const useCart = () => useContext(CartContext);

export {CartProvider, useCart};