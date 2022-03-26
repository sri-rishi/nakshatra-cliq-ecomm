import { Link } from "react-router-dom";
import { useData } from "../../../Context/data.context"
import { useFilteredData } from "../../../Context/filterData.context";

export const TypeCategorySection = () => {
    const {typeCategoriesData} = useData();
    const {filterDispatch} = useFilteredData();
    
    return (
        <div className="flex-column justify-center align-center gap-2">
            <h3 className="md-heading">Shop By Category</h3>
            <div className="category-item-box flex-row justify-center align-center">
                {
                    !typeCategoriesData ? 
                    <div>Loading... </div>
                    : 
                    typeCategoriesData.map(({_id, categoryName, imageSrc}) => (
                        <Link to="/productlist" key={_id}>
                            <div  className="category-items grid align-center justify-center" onClick={() => (filterDispatch({type: "FILTER_BY_TYPE", payload: categoryName}))}>
                                <img className="img-responsive category-images" src={imageSrc} alt={`${categoryName} Camera Category`} />
                                <p className="m-vl-1 xsm-heading">{categoryName}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}