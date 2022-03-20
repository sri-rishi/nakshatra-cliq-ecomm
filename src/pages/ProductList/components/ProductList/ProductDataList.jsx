import { VerticalCard } from "../../../../Components/VerticalCard/VerticalCard"
import { productData } from "../../../../data/product.data"

export const ProductDataList = () => {
    return (
        <main className="main-box grid grid-3-column">
            {
                productData.map(({_id,
                    brandName,
                    categoryName,
                    imageSrc,
                    inStock,
                    fastDelivery,
                    newArrival,
                    commingSoon,
                    interestCategory,
                    price,
                    ratings,
                    description}) => (

                        <VerticalCard key={_id}
                        _id={_id}
                        brandName={brandName} 
                        categoryName={categoryName} 
                        imageSrc={imageSrc}  
                        inStock={inStock}
                        fastDelivery={fastDelivery}
                        newArrival={newArrival}
                        commingSoon={commingSoon}
                        interestCategory={interestCategory}
                        price={price}
                        ratings={ratings}
                        description={description}/>
                        // <div className="card card-vl-full-img vl-card card-shadow">
                        //     <div className="img-vl-container img-box bg-white">
                        //         <img className="img-responsive cart-img" src={imageSrc} alt="Canon Camera" />
                        //     </div>
                        //     <div className="text-container text-vl-container text-vl-p-container">
                        //         <div className="card-title">
                        //             <h5 className="xsm-heading">{brandName}</h5>
                        //             <p className="card-subtitle mt-8-px text-ellipsis-overflow">{description}</p>
                        //             <button className="card-btn-transparent card-like-btn">
                        //                 <i className="fas fa-heart"></i>
                        //             </button>
                        //         </div>
                        //         <div className="card-desc">
                        //             <span className="xsm-heading">&#8377; {price.discounted}</span> <span className="text-striked">&#8377; {price.original}</span>
                        //         </div>
                        //         <div className="card-vl-cta-section align-center">
                        //             <button className="btn btn-primary">
                        //                 <i className="fas fa-shopping-cart"></i>
                        //                 Add To Cart
                        //             </button>
                        //         </div>
                        //     </div>
                        // </div>
                    ))
            }
        </main>
    )
}