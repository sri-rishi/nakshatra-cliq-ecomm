import { getProductFromServer, getProductByIdfromServer, getTypeCategoriesFromServer, getCartItemsFromServer, getWishlistItemsFromServer } from "./getMethodApiCalls";
import { signInHandler, loginHandler, postCartItems, updateQuantityInCart, postWishlistItem } from "./postMethodApiCalls";
import { deleteFromCart, deleteFromWishList } from "./deleteMethodApiCalls";

export {getProductByIdfromServer, getProductFromServer, getTypeCategoriesFromServer, signInHandler, loginHandler, getCartItemsFromServer, postCartItems, deleteFromCart, updateQuantityInCart, postWishlistItem, getWishlistItemsFromServer, deleteFromWishList};