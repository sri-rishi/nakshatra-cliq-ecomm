import { Link } from "react-router-dom";
import { AiFillHeart, FaShoppingCart} from "../../../../assets/icons";
import { products } from "../../../../backend/db/products";
import { Button, TextBadgeSquare, Ratings } from "../../../../Components/index";
import { useCart } from "../../../../Context/cart.context";
import { useWishlist } from "../../../../Context/wishlist.context";
import { findItemInArray } from "../../../../Helper";


export const VerticalCard = (props) => {
    const {addToCart, cart} = useCart();
    const {addToWishlist, wishlist} = useWishlist();
    
    const {
        _id, 
        brandName,
        categoryName,
        imageSrc,
        inStock,
        fastDelivery,
        newArrival,
        comingSoon,
        interestCategory,
        price,
        ratings,
        description
    } = props.productItems;

    return (
        <div className={`card card-vl-full-img vl-card card-shadow overlay-box`}>
            <Link to={`/productlist/${_id}`}>
                <div className="img-vl-container img-box cursor-pointer">
                    <img className="img-responsive cart-img" src={imageSrc} alt={`${brandName} Camera`} />
                    {newArrival &&<TextBadgeSquare className="badge-square" text="New"/>}
                </div>
            </Link>
            <div className="text-container text-vl-container text-vl-p-container">
                <div className="card-title">
                    <h5 className="xsm-heading">{brandName}</h5>
                    <p className="card-subtitle mt-8-px text-ellipsis-overflow">{description}</p>
                    <Button 
                    className={`card-btn-transparent card-like-btn ${findItemInArray(wishlist, _id)?  "added-in-wishlist": ""}`} 
                    icon={<AiFillHeart className="icon-vr-align"/>} 
                    onClick={() => findItemInArray(wishlist, _id) ? console.log("Phele se hai") : addToWishlist(props.productItems)} 
                    />
                </div>
                <div className="card-desc flex-column gap-1">
                    <p className="flex-row align-center gap-8-px">
                        <span className="card-dis-price">&#8377; {price.discounted}</span> <span className="text-striked">&#8377; {price.original}</span> <span className="orange-text font-weight-6"> &#40; {price.discount}&#37; off &#41;</span>
                    </p>
                    <Ratings text={ratings}/>
                </div>
                <div className="card-vl-cta-section align-center">
                    <Button 
                        className="btn btn-primary" 
                        icon={<FaShoppingCart className="icon-vr-align mr-1"/>} 
                        text={findItemInArray(cart, _id) ? "Added to Cart" : "Add to Cart"} 
                        disabled={!inStock} 
                        onClick={() => findItemInArray(cart, _id) ? console.log("phele se hai") : addToCart(props.productItems)}
                    />
                </div>
            </div>
            {   
                !inStock && 
                <div className="card-overlay-div">
                    <span className="overlay-text-box">
                        {`${comingSoon ? "Coming soon" : "Out Of Stock"}`}
                    </span>
                </div>
            }
        </div>
    )
}