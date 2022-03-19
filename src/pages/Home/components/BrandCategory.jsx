import { canonLogoImage, fujifilmLogoImage, nikonLogoImage, sonyLogoImage } from "../../../assets/main-images"

export const BrandNameSection = () => {
    const brandLogoData = [
        {
            id: 1, 
            imageSrc: canonLogoImage,
            altText: "Canon Logo"
        },
        {
            id: 2, 
            imageSrc: nikonLogoImage,
            altText: "Nikon Logo"
        },
        {
            id: 3, 
            imageSrc: fujifilmLogoImage,
            altText: "Fujifilm Logo"
        },
        {
            id: 4, 
            imageSrc: sonyLogoImage,
            altText: "Sony Logo"
        }
    ]
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