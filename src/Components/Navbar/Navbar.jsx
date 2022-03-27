import { NavLink } from "react-router-dom";
import {FaUserCircle, AiFillHeart, FaShoppingCart, GiHamburgerMenu} from "../../assets/icons";
import { useAuth } from "../../Context/auth.context";
import { Button } from "../index";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
    const {isUserLoggedIn, user} = useAuth();
    return (
        <div>
            <nav className="nav-box navbar-box flex-row align-center justify-evenly">
                <div className="nav-section title-section flex-row align-center justify-evenly">
                    <Button className="hamburger display-none btn-border-none bg-transparent" icon={<GiHamburgerMenu className="icon-vr-align"/>} />
                    <NavLink to="/">
                        <div className="title font-weight-3">
                            nakshatra <span className="sub-title">CLiQ</span>
                        </div>
                    </NavLink>
                </div>

                <SearchBar />
                
                <div className="nav-section flex-row align-center justify-center">
                    {
                        isUserLoggedIn ? user.firstName : <NavLink to="/login">
                        <Button text="Login" className="btn btn-primary mr-1 md-screen-hidden" />
                    </NavLink>
                    }
                  
                    <ul className="nav-link-items flex-row align-center justify-around">
                        <li className="nav-items nav-cta-icon">
                            <NavLink to="/user/wishlist">
                                <AiFillHeart className="icon-vr-align nav-cta-icon"/>
                                <span className="icon-badge number-sm-badge">9</span>
                            </NavLink>
                        </li>
                        <li className="nav-items nav-cta-icon">
                            <NavLink to="/user/cart">
                                <FaShoppingCart className="icon-vr-align nav-cta-icon"/>
                                <span className="icon-badge number-sm-badge">9</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>         
            </nav>
        </div>
    )
}