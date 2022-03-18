import { instantInterestLogoImage, travelInterestLogoImage, weddingInterestLogoImage, wildlifeInterestLogoImage } from "../../../assets/main-images"

export const InterestCategorySection = () => {
    const brandLogoData = [
        {
            id: 1, 
            imageSrc: weddingInterestLogoImage,
            altText: "Wedding Interest Category"
        },
        {
            id: 2, 
            imageSrc: wildlifeInterestLogoImage,
            altText: "Wildlife Interest Category"
        },
        {
            id: 3, 
            imageSrc: travelInterestLogoImage,
            altText: "Travel Interest Category"
        },
        {
            id: 4, 
            imageSrc: instantInterestLogoImage,
            altText: "Instant Interest Category"
        }
    ]
    return(
        <div className="flex-column justify-center align-center gap-2">
            <h3 className="md-heading">Shop By Interest</h3>
            <div className="flex-row align-center justify-evenly gap-2">
                {
                    brandLogoData.map(({id, imageSrc, altText}) => (
                        <a href="#" key={id}>
                            <div className="interest-category-div">
                                <img className="img-responsive" src={imageSrc} alt={altText} />
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}