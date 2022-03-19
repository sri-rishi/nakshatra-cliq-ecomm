import { interestCoverData } from "../../../data/interestCategoryCover.data"

export const InterestCategorySection = () => {
    return(
        <div className="flex-column justify-center align-center gap-2">
            <h3 className="md-heading">Shop By Interest</h3>
            <div className="flex-row align-center justify-evenly gap-2">
                {
                    interestCoverData.map(({id, imageSrc, altText}) => (
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