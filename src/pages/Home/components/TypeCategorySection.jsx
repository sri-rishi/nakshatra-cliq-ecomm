import { typeCategorySectionItems } from "../../../data"

export const TypeCategorySection = () => {
    
    return (
        <div className="flex-column justify-center align-center gap-2">
            <h3 className="md-heading">Shop By Category</h3>
            <div className="category-item-box flex-row justify-center align-center">
                {
                    typeCategorySectionItems.map(({id, typeCategoryName, imageSrc}) => (
                        <a href="#" key={id}>
                            <div className="category-items grid align-center justify-center">
                                <img className="img-responsive category-images" src={imageSrc} alt={`${typeCategoryName} Camera Category`} />
                                <p className="m-vl-1 xsm-heading">{typeCategoryName}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}