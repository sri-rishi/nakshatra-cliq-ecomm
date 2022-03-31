import axios from "axios";

const signInHandler = async (userDetails, authDispatch, navigate) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password,
      });
    
      if(response.status === 201 || response.status === 200) {
        authDispatch({type: "LOGIN", payload: response.data.createdUser})
      }
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/")
    } catch (error) {
      console.error(error);
    }
};

const loginHandler = async (userEmail, userPassword, authDispatch, navigate) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: userEmail,
        password: userPassword,
      });
      if(response.status === 200 || response.status === 201) {
        authDispatch({type: "LOGIN", payload: response.data.foundUser})
      }
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
}; 

const postCartItems =  async(product, cartDispatch) => {
  const token = localStorage.getItem("token"); 
  try {
      const response = await axios.post("/api/user/cart", {product}, {headers:{authorization: token}});
      if(response.status === 201 || response.status === 200) {
          console.log(response);
          cartDispatch({type: "SET_CART", payload: response.data.cart})
      }
  } catch(error) {
      console.error(error);
  } 
}

const updateQuantityInCart = async(id, type, cartDispatch) => {
  const token = localStorage.getItem("token");
  try {
      const response = await axios.post(`/api/user/cart/${id}`, {action: {type: type}}, {headers:{authorization: token}});
      if((response.status === 201 || response.status === 200)) {
        cartDispatch({type: "SET_CART", payload: response.data.cart});
      }
  }catch(e) {
      console.error(e);
  }
}

const postWishlistItem = async(product, wishlistDispatch) => {
  const token = localStorage.getItem("token"); 
  try {
      const response = await axios.post("/api/user/wishlist", {product}, {headers:{authorization: token}});
      if(response.status === 201 || response.status === 200) {
          console.log(response);
          wishlistDispatch({type: "SET_WISHLIST", payload: response.data.wishlist})
      }
  } catch(error) {
      console.error(error);
  }
}

export {signInHandler, loginHandler, postCartItems, updateQuantityInCart, postWishlistItem};