import { heroCoverImage } from "../../../assets/main-images";

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
                    <a href="#">
                        <button className="btn shop-cta-btn btn-primary">Shop Now</button>
                    </a>
                </div>
            </div>
        </div>
    )
}