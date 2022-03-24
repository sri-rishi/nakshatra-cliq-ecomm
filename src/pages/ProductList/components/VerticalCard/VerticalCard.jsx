import { AiFillHeart, FaShoppingCart} from "../../../../assets/icons";
import { Button } from "../../../../Components/index/index";


export const VerticalCard = (props) => {
    const { brandName,categoryName,imageSrc,inStock,fastDelivery,newArrival,comingSoon,interestCategory,price,ratings,description} = props.productItems
    return (
        <div className={`card card-vl-full-img vl-card card-shadow overlay-box`}>
            <div className="img-vl-container img-box">
                <img className="img-responsive cart-img" src={imageSrc} alt={`${brandName} Camera`} />
                {newArrival ? <span class="text-badge badge-square">New</span> : ""}
            </div>
            <div className="text-container text-vl-container text-vl-p-container">
                <div className="card-title">
                    <h5 className="xsm-heading">{brandName}</h5>
                    <p className="card-subtitle mt-8-px text-ellipsis-overflow">{description}</p>
                    <Button className="card-btn-transparent card-like-btn" icon={<AiFillHeart className="icon-vr-align"/>} />
                </div>
                <div className="card-desc flex-column gap-1">
                    <p className="flex-row align-center gap-8-px">
                        <span className="card-dis-price">&#8377; {price.discounted}</span> <span className="text-striked">&#8377; {price.original}</span> <span className="orange-text font-weight-6"> &#40; {price.discount}&#37; off &#41;</span>
                    </p>
                    <p className="flex-row align-center rating-box gap-8-px"><span className="rating-value">{ratings}</span><img className="star-img" src="https://img.icons8.com/color/48/000000/filled-star--v1.png"/></p>
                </div>
                <div className="card-vl-cta-section align-center">
                    <Button className="btn btn-primary" icon={<FaShoppingCart className="icon-vr-align mr-1"/>} text="Add To Cart" disabled={!inStock} onClick={(e) => console.log(e.target.disabled)}/>
                </div>
            </div>
            {!inStock && <div className="card-overlay-div"><span className="overlay-text-box">{`${comingSoon ? "Coming soon" : "Out Of Stock"}`}</span></div>}
        </div>
    )
}