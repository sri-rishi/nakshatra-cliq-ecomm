export const newArrivalSection = () => {
    return (
        <div className="new-section flex-column justify-center align-center gap-2">
            <h3 className="md-heading">New Collections</h3>
            <div className="new-card-div flex-row justify-evenly align-center gap-2">
                <a href="#">
                    <div className="new-div-box overlay-box">
                        <img className="img-responsive new-div-img" src="https://raw.githubusercontent.com/sri-rishi/nakshatra-cam-ecomm/dev/assests/images/new-arrivals-cover.jpg" alt="New Arrivals"  loading="lazy" />
                        <div className="overlay-cont flex-row justify-center align-center">
                            <p className="text-overlay md-heading">New Arrivals</p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="new-div-box overlay-box">
                        <img className="img-responsive new-div-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUGgl7exUHx7Y8Dmau2rRLzVuuSaxn43aOw&usqp=CAU" alt="Coming Soon"  loading="lazy" />
                        <div className="overlay-cont flex-row justify-center align-center">
                            <p className="text-overlay md-heading">Coming Soon</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}