import {FaUserCircle, AiFillHeart, FaShoppingCart, GiHamburgerMenu} from "../../assets/icons";
import { Button } from "../index";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
    return (
        <div>
            <nav className="nav-box navbar-box flex-row align-center justify-evenly">
                <div className="nav-section title-section flex-row align-center justify-evenly">
                    <Button className="hamburger display-none btn-border-none bg-transparent" icon={<GiHamburgerMenu className="icon-vr-align"/>} />
                    <a href="#">
                        <div className="title font-weight-3">
                            nakshatra <span className="sub-title">CLiQ</span>
                        </div>
                    </a>
                </div>

                <SearchBar />
                
                <div className="nav-section flex-row align-center justify-center">
                    <a href="#">
                        <Button text="Login" className="btn btn-primary mr-1 md-screen-hidden" />
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