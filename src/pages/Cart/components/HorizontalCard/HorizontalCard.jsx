import axios from "axios";
import { deleteFromCart, updateQuantityInCart } from "../../../../api-calls";
import { AiOutlineMinus, AiOutlinePlus} from "../../../../assets/icons"
import { Button } from "../../../../Components/index";
import { useCart } from "../../../../Context/cart.context";
import { useWishlist } from "../../../../Context/wishlist.context";

export const HorizontalCard = ({cartItem}) => {   
    const {cartDispatch} = useCart();
    const {addToWishlist} = useWishlist();

    const removeFromCart = (id) => {
       deleteFromCart(id, cartDispatch)
    }

    const quantityHandler = (id, qty, type) => {
        if(type === "increment" || type === "decrement" && qty > 1) {
            updateQuantityInCart(id, type, cartDispatch);
        }
    }

    const moveToWishlist = (id, product) => {
        addToWishlist(product)
        removeFromCart(id);
    }

    return (
        <div className="cart-item grid grid-equal card-shadow">
            <div className="img-container">
                <img className="img-responsive" src={cartItem.imageSrc} alt="Canon Camera" />
            </div>
            <div className="flex-column m-hr-1 justify-evenly">
                <div>
                    <h5 className="xsm-heading">{cartItem.brandName}</h5>
                    <p className="price-section flex-row align-center">
                        <span className="xsm-heading">&#8377;{cartItem.price.discounted}</span> 
                        <span className="text-striked">&#8377;{cartItem.price.original}</span>
                        <span className="price-off text-sm-size">&#40; {cartItem.price.discount}&#37; off &#41;</span>
                    </p>
                </div>
                <div className="flex-row align-center gap-1">
                    <Button 
                        className="cta-qty-btn btn-secondary btn-border-none flex-row justify-center align-center" 
                        icon={<AiOutlineMinus className="icon-vr-align" 
                        onClick={() => quantityHandler(cartItem._id, cartItem.qty, "decrement")}
                        disabled={cartItem.qty <= 1 ? true: false}
                        />}
                    />
                    <p className="qty-box text-sm-size">{cartItem.qty}</p>
                    <Button 
                        className="cta-qty-btn btn-border-none flex-row justify-center align-center" 
                        icon={<AiOutlinePlus className="icon-vr-align"/>} 
                        onClick={() => quantityHandler(cartItem._id, cartItem.qty, "increment")}
                    />
                </div>
                <div className="cart-cta-div flex-column gap-1 justify-center">
                    <Button className="btn btn-gray-light" text="Remove from Cart" onClick={() => removeFromCart(cartItem._id)}/>
                    <Button className="btn btn-primary-light bg-transparent" text="Move to Wishlist" onClick={() => moveToWishlist(cartItem._id, cartItem)}/>
                </div>
            </div>
        </div>
    )
}