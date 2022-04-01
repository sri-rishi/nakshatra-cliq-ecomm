import { Button } from "../../../../Components/index";
import { useCart} from "../../../../Context/cart.context";
import { totalDiscount, totalOgPrice } from "../../../../Helper";


export const PriceSummary = () => {
    const {cart} = useCart();

    return (
        <div className="flex-column price-detail-section gap-1 card-shadow">
            <h6 className="xsm-heading border-bottom">Price Details</h6>
            <div className="flex-column gap-1 border-bottom price-value">
                <p className="flex-row align-center justify-between"><span>Price (1 item)</span> <span>&#8377;{totalOgPrice(cart)}</span></p>
                <p className="flex-row align-center justify-between"><span>Discount</span> <span>&#8377;-{totalDiscount(cart)}</span></p>
                <p className="flex-row align-center justify-between"><span>Delivery Charges</span> <span>&#8377;899</span></p>
            </div>
            <div className="flex-row align-center justify-between border-bottom">
                <h6 className="xsm-heading">Total Amount</h6>
                <p>{totalOgPrice(cart) - totalDiscount(cart) + 899}</p>
            </div>
            <div className="flex-column gap-1">
                <p>You will save &#8377;{totalDiscount(cart)} on this order</p>
                <Button className="btn btn-primary" text="Place Order" />
            </div>
        </div>
    )
}