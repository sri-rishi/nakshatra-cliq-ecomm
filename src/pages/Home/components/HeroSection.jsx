import { Link } from "react-router-dom";
import { heroCoverImage } from "../../../assets/main-images";
import { Button } from "../../../Components/index";

export const HeroSection = () => {
    return (
        <div className="cover-div">
            <img className="img-responsive cover-img" src={heroCoverImage} alt="Cover-image" />
            <div className="cover-text-box flex-column justify-center">
                <div className="cover-heading md-heading">
                    Collect moments not things
                </div>
                <div className="cover-text flex-column">
                    <p>Capture your precious moments with our best collections</p>
                    <Link to="/productlist">
                        <Button className="btn shop-cta-btn btn-primary" text="Shop Now"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}