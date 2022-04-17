import axios from "axios";

const getProductFromServer = async(setProductListData) => {
    try {
        const response = await axios.get("/api/products");
        setProductListData(response?.data?.products);
    }catch(e) {
        console.error(e);
    }
}

const getTypeCategoriesFromServer = async(setTypeCategories) => {
    try {
        const response = await axios.get("/api/categories");
        setTypeCategories(response?.data?.categories);
    }catch(e) {
        console.error(e)
    }
}

const getProductByIdfromServer = async(productId, setProduct, setLoading) => {
    try {
        const response = await axios.get(`/api/products/${productId}`);
        if(response?.data?.product) {
            setLoading(false);
            setProduct(response.data.product);
        }
    }catch(e) {
        console.error(e)
    }
}

const getCartItemsFromServer = async(cartDispatch) => {
    const token = localStorage.getItem("token"); 
    try {
        const response = await axios.get("/api/user/cart" , {headers:{authorization: token}})
        if(response.status === 200 || response.status === 201) {
            cartDispatch({type: "SET_CART", payload: response.data.cart})
        }
    }catch(error) {
        console.error(error)
    }
}

const getWishlistItemsFromServer = async(wishListDispatch) => {
    const token = localStorage.getItem("token"); 
    try {
        const response = await axios.get("/api/user/wishlist" , {headers:{authorization: token}})
        if(response.status === 200 || response.status === 201) {
            wishListDispatch({type: "SET_WISHLIST", payload: response.data.wishlist})
        }
    }catch(error) {
        console.error(error)
    }
}

export {getProductByIdfromServer, getTypeCategoriesFromServer, getProductFromServer, getCartItemsFromServer, getWishlistItemsFromServer}