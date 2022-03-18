import { bridgeCameraCoverImage, compactCameraCoverImage, dslrCoverImage, mirrorlessCoverImage } from "../../../assets/main-images"

export const CategorySection = () => {
    const categorySectionItems = [
        {
            id: 1, 
            categoryName: "DSLR",
            imageSrc: dslrCoverImage
        },
        {
            id: 2,
            categoryName: "Compact",
            imageSrc: compactCameraCoverImage
        },
        {
            id: 3,
            categoryName: "Mirrorless",
            imageSrc: mirrorlessCoverImage
        },
        {
            id: 4,
            categoryName: "Bridge",
            imageSrc: bridgeCameraCoverImage
        }
    ]
    return (
        <div class="flex-column justify-center align-center gap-2">
            <h3 class="md-heading">Category</h3>
            <div class="category-item-box flex-row justify-center align-center">
                {
                    categorySectionItems.map(({id, categoryName, imageSrc}) => (
                        <a href="#" key={id}>
                            <div className="category-items grid align-center justify-center">
                                <img className="img-responsive category-images" src={imageSrc} alt={`${categoryName} Camera Category`} />
                                <p className="m-vl-1 xsm-heading">{categoryName}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}