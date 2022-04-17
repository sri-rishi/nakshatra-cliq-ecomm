import axios from "axios";

const deleteFromCart = async(id, cartDispatch, setToastData) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.delete(`/api/user/cart/${id}`, {headers:{authorization: token}});
        if((response.status === 201 || response.status === 200)) {
            cartDispatch({type: "SET_CART", payload: response.data.cart});
            setToastData({
                toastText:"Successfully removed from cart",
                toastDisplay: true,
                toastType: "success"
            })
        }
    }catch(error) {
        setToastData({
            toastText: error,
            toastDisplay: true,
            toastType: "error"
        })
    }
}

const deleteFromWishList = async(id, wishistDispatch, setToastData) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.delete(`/api/user/wishlist/${id}`, {headers:{authorization: token}});
        if((response.status === 201 || response.status === 200)) {
            wishistDispatch({type: "SET_WISHLIST", payload: response.data.wishlist});
            setToastData({
                toastText:"Successfully removed from wishlist",
                toastDisplay: true,
                toastType: "success"
            })
              
        }
    }catch(e) {
        console.log(e);
    }
}


export {deleteFromCart, deleteFromWishList}