import axios from "axios";

const signInHandler = async (userDetails, authDispatch, navigate, setToastData) => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      password: userDetails.password,
    });
  
    if(response.status === 201 || response.status === 200) {
      authDispatch({type: "LOGIN", payload: response.data.createdUser})
      setToastData({
        toastText:"Successfully singed up",
        toastDisplay: true,
        toastType: "success"
      })
    }
    localStorage.setItem("token", response.data.encodedToken);
    navigate("/");
  } catch (error) {
    setToastData({
        toastText: error,
        toastDisplay: true,
        toastType: "error"
    })
  }
};

const loginHandler = async (userInput, authDispatch, navigate, setToastData) => {
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: userInput.email,
      password: userInput.password,
    });
    if(response.status === 200 || response.status === 201) {
      authDispatch({type: "LOGIN", payload: response.data.foundUser})
      setToastData({
        toastText:"Successfully logged in",
        toastDisplay: true,
        toastType: "success"
      })
    }
    localStorage.setItem("token", response.data.encodedToken);
    navigate("/");
  } catch (error) {
    setToastData({
        toastText: error,
        toastDisplay: true,
        toastType: "error"
    })
  }
}; 

const postCartItems =  async(product, cartDispatch, setToastData) => {
  const token = localStorage.getItem("token"); 
  try {
    const response = await axios.post("/api/user/cart", {product}, {headers:{authorization: token}});
    if(response.status === 201 || response.status === 200) {
      cartDispatch({type: "SET_CART", payload: response.data.cart})
      setToastData({
        toastText:"Successfully added to playlist",
        toastDisplay: true,
        toastType: "success"
      })
    }
  } catch(error) {
    setToastData({
        toastText: error,
        toastDisplay: true,
        toastType: "error"
    })
  } 
}

const updateQuantityInCart = async(id, type, cartDispatch, setToastData) => {
  const token = localStorage.getItem("token");
  try {
      const response = await axios.post(`/api/user/cart/${id}`, {action: {type: type}}, {headers:{authorization: token}});
      if((response.status === 201 || response.status === 200)) {
        cartDispatch({type: "SET_CART", payload: response.data.cart});
        setToastData({
          toastText:"Updated quantity of product",
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

const postWishlistItem = async(product, wishlistDispatch, setToastData) => {
  const token = localStorage.getItem("token"); 
  try {
    const response = await axios.post("/api/user/wishlist", {product}, {headers:{authorization: token}});
    if(response.status === 201 || response.status === 200) {
      wishlistDispatch({type: "SET_WISHLIST", payload: response.data.wishlist});
      setToastData({
        toastText:"Successfully added product to wishlist",
        toastDisplay: true,
        toastType: "success"
      }) 
    }
  } catch(error) {
    setToastData({
      toastText: error,
      toastDisplay: true,
      toastType: "error"
    })
  }
}

export {signInHandler, loginHandler, postCartItems, updateQuantityInCart, postWishlistItem};