import { Link } from "react-router-dom";
import {useFilteredData} from "../../../Context";
import { newArrivalCover } from "../../../data";

export const NewCategorySection = () => {
    const {filterDispatch} = useFilteredData();
    
    return (
        <div className="new-section flex-column justify-center align-center gap-2">
            <h3 className="md-heading">New Collections</h3>
            <div className="new-card-div flex-row justify-evenly align-center gap-2">
                {
                    newArrivalCover.map(({id, imageUrl, description, payloadValue}) => (
                        
                        <Link to="/productlist" key={id}>
                            <div  
                            className="new-div-box overlay-box" 
                            onClick={() => filterDispatch({type: "BY_NEW_CATEGORY", payload: payloadValue})}
                            >
                                <img className="img-responsive new-div-img" src={imageUrl} alt={description} loading="lazy" />
                                <div className="overlay-cont flex-row justify-center align-center">
                                    <p className="text-overlay md-heading">{description}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}