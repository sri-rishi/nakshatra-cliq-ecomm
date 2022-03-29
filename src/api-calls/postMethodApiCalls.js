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

const postCartItems =  async(product) => {
  const token = localStorage.getItem("token"); 
  try {
      const response = await axios.post("/api/user/cart", {product}, {headers:{authorization: token}});
      if(response.status === 201) {
          console.log(response);
      }
  } catch(error) {
      console.error(error);
  } 
}

export {signInHandler, loginHandler, postCartItems};