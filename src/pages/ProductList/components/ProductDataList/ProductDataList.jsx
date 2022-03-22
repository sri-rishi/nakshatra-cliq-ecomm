import { VerticalCard } from "../VerticalCard/VerticalCard"
import { useFilteredData } from "../../../../Context/filterData.context"

export const ProductDataList = () => {
    const {filteredByFastDeliveryData} = useFilteredData();
    return (
        <main className="main-box grid grid-3-column">
            {
                filteredByFastDeliveryData.map((productItems) => (
                        <VerticalCard key={productItems._id} productItems={productItems}/>
                    ))
            }
        </main>
    )
}