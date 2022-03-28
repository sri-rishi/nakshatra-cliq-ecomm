import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/auth.context";
import { Button } from "../../../Components/index";


export const Login = () => {
    const {authDispatch, isUserLoggedIn, user} = useAuth();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [signInResponse, setSignInResponse] = useState();
    const navigate = useNavigate();

    const signinHandler = (e) => {
        e.preventDefault();
        loginHandler();
    }

    const loginHandler = async () => {
        try {
          const response = await axios.post(`/api/auth/login`, {
            email: userEmail,
            password: userPassword,
          });
          setSignInResponse(response);
          if(response.status === 201) {
              authDispatch({type: "LOGIN", payload: response.data.foundUser})
          }
          localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
            console.log("Idhar se aa rha");
          console.error(error);
        }
        navigate("/");
      };

    return (
        <main className="login-main flex-row align-center justify-center">
            <form className="form-box login-form" action="#">
                <div className="form-head">
                    <h4 className="sm-heading">Login</h4>
                </div>
            
                <label className="form-label" htmlFor="email" aria-label="Email">Email
                    <input 
                        className="input std-input" 
                        type="email"  
                        id="email" 
                        name="email" 
                        placeholder="Enter Your Email"
                        value={userEmail} 
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                </label>
            
                <label className="form-label" htmlFor="password" aria-label="Password">Password
                    <input 
                        className="input std-input" 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter Your Password" 
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </label>
                <div className="check-forgot-div">
                    <p className="p-highlight login-p">Forgot Your Password</p>
                </div>
            
                <Button className="form-cta btn btn-primary" onClick={(e) => signinHandler(e)} text="Login"/>

                <Button />
            
                <Link to="/signup">
                    <Button className="form-cta btn btn-outline-primary" text="Create New Account" />
                </Link>
            </form>
        </main>
    )
}