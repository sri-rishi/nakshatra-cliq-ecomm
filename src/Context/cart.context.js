import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const cartReducer = (state, action) => {
        switch(action.type) {
            case "SET_CART":
                return {
                    ...state, 
                    cart: action.payload
                }
        }
    } 

    const [state, dispatch] = useReducer(cartReducer, {cart: []});
    
    return (
        <CartContext.Provider value={{cart: state.cart, cartDispatch: dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export {CartProvider, useCart};