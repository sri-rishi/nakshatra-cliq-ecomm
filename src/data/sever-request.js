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

export {getProductFromServer, getTypeCategoriesFromServer, getProductByIdfromServer, signInHandler, loginHandler}