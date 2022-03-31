import axios from "axios";

const deleteFromCart = async(id, cartDispatch) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.delete(`/api/user/cart/${id}`, {headers:{authorization: token}});
        if((response.status === 201 || response.status === 200)) {
            cartDispatch({type: "SET_CART", payload: response.data.cart});
        }
    }catch(e) {
        console.log(e);
    }
}

const deleteFromWishList = async(id, wishistDispatch) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.delete(`/api/user/wishlist/${id}`, {headers:{authorization: token}});
        if((response.status === 201 || response.status === 200)) {
            wishistDispatch({type: "SET_WISHLIST", payload: response.data.wishlist});
        }
    }catch(e) {
        console.log(e);
    }
}


export {deleteFromCart, deleteFromWishList}