import { Button } from "../../../Components/index/index";
import { FaShoppingCart } from "../../../assets/icons";
import { findItemInArray } from "../../../Helper";
import { useCart } from "../../../Context/cart.context";
import { useWishlist } from "../../../Context/wishlist.context";
import { deleteFromWishList } from "../../../api-calls";

export const WishlistitemCard = ({wishlistItem}) => {
    const {cart, addToCart} = useCart(); 
    const {wishlistDispatch} = useWishlist();

    const moveToCart = (product, id) => {
        addToCart(product);
        removeFromWishlist(id)
    }

    const removeFromWishlist = (id) => {
        deleteFromWishList(id, wishlistDispatch);
    }

    return (
        <div className="card card-vl-full-img vl-card card-shadow">
            <div className="img-vl-container">
                <img className="img-responsive wished-item-img" src={wishlistItem?.imageSrc} alt={`${wishlistItem?.brandname} Camera`} />
            </div>
            <div className="text-container text-vl-container text-vl-p-container">
                <div className="card-title">
                    <h5 className="xsm-heading">{wishlistItem?.brandname}</h5>
                    <p className="card-subtitle mt-8-px text-ellipsis-overflow">{wishlistItem?.description}</p>
                </div>
                <div className="card-desc">
                    <span className="xsm-heading">&#8377;{wishlistItem?.price.discounted}</span> 
                    <span className="text-striked">&#8377; {wishlistItem?.price.original}</span>
                </div>
                <div className="card-vl-cta-section">
                    <Button 
                    className="btn btn-primary" 
                    icon={<FaShoppingCart className="icon-vr-align"/>} 
                    text={cart && findItemInArray(cart, wishlistItem?._id) ? "Added to Cart" : "Move To Cart"}
                    onClick={() => cart && findItemInArray(cart, wishlistItem?._id) ? console.log("Phele se hai") : moveToCart(wishlistItem, wishlistItem._id) } 
                    />
                    <Button className="btn btn-outline-primary" text="Remove from Wishlist" onClick={() => removeFromWishlist(wishlistItem._id)}/>
                </div>
            </div>
        </div>
    )
}