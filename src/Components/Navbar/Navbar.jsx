import { NavLink } from "react-router-dom";
import {AiFillHeart, FaShoppingCart, GiHamburgerMenu} from "../../assets/icons";
import { useAuth } from "../../Context/auth.context";
import { useCart } from "../../Context/cart.context";
import { useWishlist } from "../../Context/wishlist.context";
import { Button } from "../index";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
    const {isUserLoggedIn, user} = useAuth();
    const {wishlist} = useWishlist();
    const {cart} = useCart();
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
                         <NavLink to="/user/user-profile">
                            <Button 
                                text={isUserLoggedIn ? user.firstName : "Login"} 
                                className={`btn ${isUserLoggedIn ? "card-shadow primary-color-text font-weight-5" : "btn-primary"} mr-1 md-screen-hidden`} 
                            />
                        </NavLink>
                    }
                  
                    <ul className="nav-link-items flex-row align-center justify-around">
                        <li className="nav-items nav-cta-icon">
                            <NavLink to="/user/wishlist">
                                <AiFillHeart className="icon-vr-align nav-cta-icon"/>
                                {wishlist.length ? <span className="icon-badge number-sm-badge">{wishlist.length}</span> : ""}
                            </NavLink>
                        </li>
                        <li className="nav-items nav-cta-icon">
                            <NavLink to="/user/cart">
                                <FaShoppingCart className="icon-vr-align nav-cta-icon"/>
                                {cart.length ? <span className="icon-badge number-sm-badge">{cart.length}</span> : ""}
                            </NavLink>
                        </li>
                    </ul>
                </div>         
            </nav>
        </div>
    )
}