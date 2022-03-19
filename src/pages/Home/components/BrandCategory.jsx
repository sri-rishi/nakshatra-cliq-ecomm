import { brandLogoData } from "../../../data"


export const BrandNameSection = () => {   
    return(
        <div className="flex-column justify-center align-center gap-3">
            <h3 className="md-heading">Shop By Brands</h3>
            <div className="flex-row align-center justify-evenly gap-3">
                {
                    brandLogoData.map(({id, imageSrc, altText}) => (
                        <a href="#" key={id}>
                            <div className="brands-img-div">
                                <img className="img-responsive brand-img" src={imageSrc} alt={altText} />
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}