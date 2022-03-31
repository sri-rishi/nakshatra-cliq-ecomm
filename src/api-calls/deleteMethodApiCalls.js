import axios from "axios";

const deleteFromCart = async(id, cartDispatch) => {
    const token = localStorage.getItem("token")
    try {
        const response = await axios.delete(`/api/user/cart/${id}`, {headers:{authorization: token}});
        if(response?.data?.cart) {
            cartDispatch({type: "SET_CART", payload: response.data.cart});
        }
    }catch(e) {
        console.log(e);
    }
}


export {deleteFromCart}