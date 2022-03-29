import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {FaShippingFast,MdEventAvailable, FaShoppingCart, AiFillHeart, MdEventBusy} from "../../assets/icons";
import { Button, Navbar, Ratings, TextBadgeSquare } from "../../Components/index";
import { getProductByIdfromServer, postCartItems } from "../../api-calls";

export const ProductDetails = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();

    useEffect(() => {
        getProductByIdfromServer(productId, setProduct, setLoading);
    }, [productId])

    const addToCart = (product) => {
        postCartItems(product)
    }

    if(loading) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <Navbar />
            <main className="flex-row align-center justify-center">
                <div className="productDetails-card grid grid-equal card-shadow font-weight-4 ">
                    <div className="img-container img-box flex-row align-center justify-center">
                        <img className="img-responsive product-img" src={product?.imageSrc} alt={`${product?.brandName} Camera`} />
                        {product?.newArrival && <TextBadgeSquare className="badge-square detail-section-badge" text="New"/>}
                    </div>
                    <div className="flex-column m-hr-1 justify-center gap-2">
                        <div className="flex-column justify-evenly main-detail gap-1">
                            <div className="flex-column gap-8-px">
                                <h5 className="xsm-heading poppins-font font-weight-4">{product?.brandName}</h5>
                                <p className="card-subtitle productDetail-desc">{product?.description}</p>
                                <Ratings text={product?.ratings}/>
                            </div>
                            <div className="flex-column justify-around gap-8-px">
                                <p className="price-section flex-row align-center">
                                    <span className="card-dis-price">&#8377; {product?.price.discounted}</span> 
                                    <span className="text-striked price-org">&#8377; {product?.price.original}</span>
                                    <span className="price-off text-sm-size">&#40; {product?.price.discount}&#37; off &#41;</span>
                                </p>
                                <p className="green-sm-text font-weight-6">inclusive of all taxes</p> 
                            </div>
                        </div>
                        
                        <div className="">
                            {
                                product?.fastDelivery && <p className="flex-row align-center gap-8-px poppins-font"> <FaShippingFast className="icon-vr-align"/> <span className="font-weight-6 mt-3-px">Fast delivery is available</span></p>
                            }
                            {
                                <p className="flex-row align-center gap-8-px poppins-font"> {product?.inStock ? <MdEventAvailable className="icon-vr-align"/> : <MdEventBusy className="icon-vr-align"/>}<span className="font-weight-6 mt-3-px">{product?.inStock ? "Currently available" : "Out of Stock"}</span></p>
                            
                            }
                        </div>
                        <div className="flex-row justify-around">
                            {
                                <Button 
                                    className={`btn ${ product?.inStock ? `btn-primary` : `btn-outline-primary`}`} 
                                    icon={product?.inStock && <FaShoppingCart className="icon-vr-align mr-8-px"/>} 
                                    text={product?.inStock ? "Add to Cart" : "Out of Stock"}
                                    onClick={() => addToCart(product)} 
                                    disabled={!product?.inStock} 
                                />
                            }
                            <Button className="btn btn-outline-secondary" icon={<AiFillHeart className="icon-vr-align mr-8-px"/>} text="Add To Wishlist" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}