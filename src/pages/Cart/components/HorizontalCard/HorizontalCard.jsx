import { AiOutlineMinus, AiOutlinePlus} from "../../../../assets/icons"
import { Button } from "../../../../Components/index"

export const HorizontalCard = () => {
    return (
        <div className="cart-item grid grid-equal card-shadow">
            <div className="img-container">
                <img className="img-responsive" src="https://img.tatacliq.com/images/i6/437Wx649H/MP000000006499071_437Wx649H_20200210121319.jpeg" alt="Canon Camera" />
            </div>
            <div className="flex-column m-hr-1 justify-evenly">
                <div>
                    <h5 className="xsm-heading">Canon EOS 1500D</h5>
                    <p className="price-section flex-row align-center">
                        <span className="xsm-heading">&#8377;52,200</span> <span className="text-striked">&#8377;58,0000</span>
                        <span className="price-off text-sm-size">&#40; 10&#37; off &#41;</span>
                    </p>
                </div>
                <div className="flex-row align-center gap-1">
                    <Button className="cta-qty-btn btn-secondary btn-border-none flex-row justify-center align-center" icon={<AiOutlineMinus className="icon-vr-align"/>}/>
                    <p className="qty-box text-sm-size">1</p>
                    <Button className="cta-qty-btn btn-border-none flex-row justify-center align-center" icon={<AiOutlinePlus className="icon-vr-align"/>} />
                </div>
                <div className="cart-cta-div flex-column gap-1 justify-center">
                    <Button className="btn btn-gray-light" text="Remove from Cart" />
                    <Button className="btn btn-primary-light bg-transparent" text="Move to Wishlist" />
                </div>
            </div>
        </div>
    )
}