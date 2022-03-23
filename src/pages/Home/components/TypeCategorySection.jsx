import { typeCategorySectionItems } from "../../../data"

export const CategorySection = () => {
    
    return (
        <div class="flex-column justify-center align-center gap-2">
            <h3 class="md-heading">Shop By Category</h3>
            <div class="category-item-box flex-row justify-center align-center">
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