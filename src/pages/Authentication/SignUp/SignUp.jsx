import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../../Context/auth.context";
import { Button } from "../../../Components/index";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [isUserAgree, setIsUserAgree] = useState(false);
    const {authDispatch, isUserLoggedIn, user} = useAuth();
    const navigate = useNavigate();

    const signupHandler =(e) => {
        e.preventDefault()
        loginHandler()
    }

    const loginHandler = async () => {
        try {
          const response = await axios.post(`/api/auth/signup`, {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email,
            password: userDetails.password,
          });
        
          if(response.status === 201) {
              authDispatch({type: "LOGIN", payload: response.data.createdUser})
          }
          localStorage.setItem("token", response.data.encodedToken);
        } catch (error) {
          console.error(error);
        }
        navigate("/")
    };
    
    return (
        <main className="flex-row align-center justify-center">
            <form className="form-box signUp-form">
                <div className="form-head">
                    <h4 className="sm-heading">Sign Up</h4>
                </div>
                <label className="form-label" htmlFor="first-name" aria-label="First Name">First Name
                    <input 
                    className="input std-input" 
                    type="text" id="first-name" 
                    name="first-name" 
                    placeholder="Enter First Name"
                    value={userDetails.firstName} 
                    onChange={(e) => setUserDetails({...userDetails, firstName: e.target.value})}/>
                </label>
            
                <label className="form-label" htmlFor="last-name" aria-label="Last Name" >Last Name
                    <input 
                    className="input std-input" 
                    type="text" id="last-name" 
                    name="last-name" 
                    placeholder="Enter Last Name"
                    value={userDetails.lastName} 
                    onChange={(e) => setUserDetails({...userDetails, lastName: e.target.value})}
                    />
                </label>
            
                <label className="form-label" htmlFor="email" aria-label="Email">Email
                    <input 
                    className="input std-input" 
                    type="email"  
                    id="email" 
                    name="email" 
                    placeholder="Enter Your Email" 
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                    />
                </label>
            
                <label className="form-label" htmlFor="password" aria-label="Password">Password
                    <input 
                    className="input std-input" 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter Your Password" 
                    value={userDetails.password}
                    onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
                    />
                </label>
                
                <label htmlFor="accept-all" aria-label="Accept condition checkbox">
                    <input 
                    className="check-input" 
                    id="accept-all" 
                    name="accept-all" 
                    type="checkbox"
                    checked={isUserAgree}
                    onChange={() => setIsUserAgree(true)}
                    />
                    I accept all terms and condition
                </label>
                
                <Button className="form-cta btn btn-primary" onClick={(e) => signupHandler(e)} text="Sign Up"/>
                
                <Link to="/login">
                    <Button className="form-cta btn btn-outline-secondary" text="Already have an account"/>
                </Link>

            </form>
    </main>
    )
}