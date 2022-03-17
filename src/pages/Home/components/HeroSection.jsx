export const HeroSection = () => {
    return (
        <div className="cover-div">
            <img className="img-responsive cover-img" src="https://raw.githubusercontent.com/sri-rishi/nakshatra-cam-ecomm/dev/assests/images/cover-image.jpg" alt="Cover image" loading="lazy" />
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