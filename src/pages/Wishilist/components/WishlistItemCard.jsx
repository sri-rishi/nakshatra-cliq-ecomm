export const WishlistitemCard = () => {
    return (
        <div className="card card-vl-full-img vl-card card-shadow">
            <div className="img-vl-container">
                <img className="img-responsive wished-item-img" src="https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg" alt="Canon Camera" />
            </div>
            <div className="text-container text-vl-container text-vl-p-container">
                <div className="card-title">
                    <h5 className="xsm-heading">Canon</h5>
                    <p className="card-subtitle mt-8-px">DSLR EOS 1500D Camera</p>
                </div>
                <div className="card-desc">
                    <span className="xsm-heading">&#8377; 52,200</span> <span className="text-striked">&#8377; 58,000</span>
                </div>
                <div className="card-vl-cta-section">
                    <button className="btn btn-primary">
                        <i className="fas fa-shopping-cart"></i>
                        Move To Cart
                    </button>
                    <button className="btn btn-outline-primary">
                        <i className="fas fa-shopping-cart"></i>
                        Remove from Wishlist
                    </button>
                </div>
            </div>
        </div>
    )
}