import { Link } from "react-router-dom"
import { useFilteredData } from "../../../Context/filterData.context"
import { brandLogoData } from "../../../data"


export const BrandNameSection = () => {   
    const {filterDispatch} = useFilteredData();
    return(
        <div className="flex-column justify-center align-center gap-3">
            <h3 className="md-heading">Shop By Brands</h3>
            <div className="flex-row align-center justify-evenly gap-3">
                {
                    brandLogoData.map(({id, imageSrc, altText, brandName}) => (
                        <Link to="/productlist" key={id}>
                            <div className="brands-img-div" onClick={() => filterDispatch({type: "FILTER_BY_BRAND", payload: brandName})}>
                                <img className="img-responsive brand-img" src={imageSrc} alt={altText} />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}