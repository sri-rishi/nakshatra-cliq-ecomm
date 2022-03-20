import { VerticalCard } from "../../../../Components/VerticalCard/VerticalCard"
import { productData } from "../../../../data/product.data"

export const ProductDataList = () => {
    return (
        <main className="main-box grid grid-3-column">
            {
                productData.map((productItems) => (
                        <VerticalCard key={productItems._id} productItems={productItems}/>
                    ))
            }
        </main>
    )
}