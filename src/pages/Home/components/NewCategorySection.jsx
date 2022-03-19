import { newArrivalCover } from "../../../data/newCategoryCover.data"

export const NewCategorySection = () => {
    
    return (
        <div className="new-section flex-column justify-center align-center gap-2">
            <h3 className="md-heading">New Collections</h3>
            <div className="new-card-div flex-row justify-evenly align-center gap-2">
                {
                    newArrivalCover.map(({id, imageUrl, description}) => (
                        <a href="#">
                            <div key={id} className="new-div-box overlay-box">
                            <img className="img-responsive new-div-img" src={imageUrl} alt={description} loading="lazy" />
                            <div className="overlay-cont flex-row justify-center align-center">
                                <p className="text-overlay md-heading">{description}</p>
                            </div>
                        </div>
                        </a>
                    ))
                }
            </div>
        </div>

    )
}