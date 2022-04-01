import { VerticalCard } from "../VerticalCard/VerticalCard"
import { useFilteredData } from "../../../../Context";

export const ProductDataList = () => {
    const {filteredByFastDeliveryData} = useFilteredData();
    return (
        <main className="main-box flex-row align-center justify-evenly gap-1">
            {
                filteredByFastDeliveryData.map((productItems) => (
                        <VerticalCard key={productItems._id} productItems={productItems}/>
                    ))
            }
        </main>
    )
}