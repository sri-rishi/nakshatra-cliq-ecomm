import { Link } from "react-router-dom"
import { useFilteredData } from "../../../Context/filterData.context";
import { interestCoverData } from "../../../data"


export const InterestCategorySection = () => {
    const {filterDispatch} = useFilteredData();
    return(
        <div className="flex-column justify-center align-center gap-2">
            <h3 className="md-heading">Shop By Interest</h3>
            <div className="flex-row align-center justify-evenly gap-2">
                {
                    interestCoverData.map(({id, imageSrc, altText, interestType}) => (
                        <Link to="/productlist" key={id}>
                            <div 
                            className="interest-category-div" 
                            onClick={() => filterDispatch({type: "FILTER_BY_INTEREST", payload: interestType})}
                            >
                                <img className="img-responsive" src={imageSrc} alt={altText} />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}