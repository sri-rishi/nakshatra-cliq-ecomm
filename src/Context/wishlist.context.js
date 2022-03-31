import { createContext, useContext, useReducer } from "react";
import { postWishlistItem } from "../api-calls";

export const WishlistContext = createContext();

const WishlistProvider = ({children}) => {
    const wishlistReducer = (state, action) => {
        switch(action.type) {
            case "SET_WISHLIST":
                return {
                    ...state,
                    wishlist: action.payload
                }

            default: 
            return {...state}
        }
    }
    const addToWishlist = (product) => {
        postWishlistItem(product, dispatch);
    }
    const [state, dispatch] = useReducer(wishlistReducer, {wishlist: []});

    return(
        <WishlistContext.Provider value={{wishlist: state.wishlist, addToWishlist, wishlistDispatch: dispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}


const useWishlist = () => useContext(WishlistContext);

export {useWishlist, WishlistProvider};