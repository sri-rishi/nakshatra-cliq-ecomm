import { useParams } from "react-router-dom";
import {FaShippingFast,MdEventAvailable, FaShoppingCart, AiFillHeart, MdEventBusy} from "../../assets/icons";
import { Button, Navbar, Ratings, TextBadgeSquare } from "../../Components/index";
import { useFilteredData } from "../../Context/filterData.context"

export const ProductDetails = () => {
    const {productId} = useParams();
    const {filteredByFastDeliveryData} = useFilteredData();

    const { _id, brandName,categoryName,imageSrc,inStock,fastDelivery,newArrival,comingSoon,interestCategory,price,ratings,description} = filteredByFastDeliveryData.find((productItem) => productItem._id === productId);
    return (
        <div>
            <Navbar />
            <main className="flex-row align-center justify-center">
                <div className="productDetails-card grid grid-equal card-shadow font-weight-4 ">
                    <div className="img-container img-box">
                        <img className="img-responsive" src={imageSrc} alt={`${brandName} Camera`} />
                        {newArrival && <TextBadgeSquare className="badge-square detail-section-badge" text="New"/>}
                    </div>
                    <div className="flex-column m-hr-1 justify-center gap-2">
                        <div className="flex-column justify-evenly main-detail gap-1">
                            <div className="flex-column gap-8-px">
                                <h5 className="xsm-heading poppins-font font-weight-4">{brandName}</h5>
                                <p className="card-subtitle productDetail-desc">{description}</p>
                                <Ratings text={ratings}/>
                            </div>
                            <div className="flex-column justify-around gap-8-px">
                                <p className="price-section flex-row align-center">
                                    <span className="card-dis-price">&#8377; {price.discounted}</span> 
                                    <span className="text-striked">&#8377; {price.original}</span>
                                    <span className="price-off text-sm-size">&#40; 10&#37; off &#41;</span>
                                </p>
                                <p className="green-sm-text font-weight-6">inclusive of all taxes</p> 
                            </div>
                        </div>
                        
                        <div className="">
                            {
                                fastDelivery && <p className="flex-row align-center gap-8-px poppins-font"> <FaShippingFast className="icon-vr-align"/> <span className="font-weight-6 mt-3-px">Fast delivery is available</span></p>
                            }
                            {
                                <p className="flex-row align-center gap-8-px poppins-font"> {inStock ? <MdEventAvailable className="icon-vr-align"/> : <MdEventBusy className="icon-vr-align"/>}<span className="font-weight-6 mt-3-px">{inStock ? "Currently available" : "Out of Stock"}</span></p>
                            
                            }
                        </div>
                        <div className="flex-row justify-around">
                            {
                                <Button className={`btn ${ inStock ? `btn-primary` : `btn-outline-primary`}`} icon={inStock && <FaShoppingCart className="icon-vr-align mr-8-px"/>} text={inStock ? "Add to Cart" : "Out of Stock"} disabled={!inStock} />
                            }
                            <Button className="btn btn-outline-secondary" icon={<AiFillHeart className="icon-vr-align mr-8-px"/>} text="Add To Wishlist" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}