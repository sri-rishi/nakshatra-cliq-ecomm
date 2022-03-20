export const VerticalCard = (props) => {
    const { brandName,categoryName,imageSrc,inStock,fastDelivery,newArrival,commingSoon,interestCategory,price,ratings,description} = props
    return (
        <div className="card card-vl-full-img vl-card card-shadow">
            <div className="img-vl-container img-box">
                <img className="img-responsive cart-img" src={imageSrc} alt="Canon Camera" />
            </div>
            <div className="text-container text-vl-container text-vl-p-container">
                <div className="card-title">
                    <h5 className="xsm-heading">{brandName}</h5>
                    <p className="card-subtitle mt-8-px text-ellipsis-overflow">{description}</p>
                    <button className="card-btn-transparent card-like-btn">
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
                <div className="card-desc">
                    <span className="xsm-heading">&#8377; {price.discounted}</span> <span className="text-striked">&#8377; {price.original}</span>
                </div>
                <div className="card-vl-cta-section align-center">
                    <button className="btn btn-primary">
                        <i className="fas fa-shopping-cart"></i>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}