import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/auth.context";
import { Button } from "../../../Components/index";


export const Login = () => {
    const {authDispatch, isUserLoggedIn, user} = useAuth();
    const [signInResponse, setSignInResponse] = useState();
    const navigate = useNavigate()

    const signinHandler = (e) => {
        e.preventDefault();
        loginHandler();
    }

    const loginHandler = async (e) => {
        try {
          const response = await axios.post(`/api/auth/login`, {
            email: "adarshbalika@neog.camp",
            password: "adarshBalika",
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
        <main className="flex-row align-center justify-center">
            <form className="form-box login-form" action="#">
                <div className="form-head">
                    <h4 className="sm-heading">Login</h4>
                </div>
            
                <label className="form-label" htmlFor="email" aria-label="Email">Email
                    <input className="input std-input" type="email"  id="email" name="email" placeholder="Enter Your Email" />
                </label>
            
                <label className="form-label" htmlFor="password" aria-label="Password">Password
                    <input className="input std-input" type="password" id="password" name="password" placeholder="Enter Your Password" />
                </label>
                <div className="check-forgot-div">
                    <label htmlFor="remember" aria-label="Remember Me checkbox">
                        <input className="check-input" id="remember" name="remember" type="checkbox"/>
                        Remember Me
                    </label>
                    <p className="p-highlight login-p">Forgot Your Password</p>
                </div>
            
                <Button className="form-cta btn btn-primary" onClick={(e) => signinHandler(e)} text="Login"/>
            
                <Link to="/signup">
                    <Button className="form-cta btn btn-outline-secondary" text="Create New Account" />
                </Link>
            </form>
        </main>
    )
}