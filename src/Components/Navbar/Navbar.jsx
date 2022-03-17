import {FaUserCircle, AiFillHeart, FaShoppingCart, GiHamburgerMenu, FaSearch} from "../../assets/icons";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
    return (
        <div>
            <nav className="nav-box navbar-box flex-row align-center justify-evenly">
                <div className="nav-section title-section flex-row align-center justify-evenly">
                    <button className="hamburger display-none btn-border-none bg-transparent">
                        <GiHamburgerMenu className="icon-vr-align"/>
                    </button>
                    <a href="#">
                        <div className="title font-weight-3">
                            nakshatra <span className="sub-title">CLiQ</span>
                        </div>
                    </a>
                </div>

                <SearchBar />
                
                <div className="nav-section flex-row align-center justify-center">
                    <a href="#">
                        <button className="btn btn-primary mr-1 md-screen-hidden">Login</button>
                    </a>
                  
                    <ul className="nav-link-items flex-row align-center justify-around">
                        <li className="nav-items nav-cta-icon">
                            <a href="#">
                                <AiFillHeart className="icon-vr-align nav-cta-icon"/>
                                <span className="icon-badge number-sm-badge">9</span>
                            </a>
                        </li>
                        <li className="nav-items nav-cta-icon">
                            <a href="#">
                                <FaShoppingCart className="icon-vr-align nav-cta-icon"/>
                                <span className="icon-badge number-sm-badge">9</span>
                            </a>
                        </li>
                    </ul>
                </div>         
            </nav>
        </div>
    )
}