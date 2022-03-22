import { VerticalCard } from "../VerticalCard/VerticalCard"
import { useFilteredData } from "../../../../Context/filterData.context"

export const ProductDataList = () => {
    const {filteredByTypeData} = useFilteredData();
    return (
        <main className="main-box grid grid-3-column">
            {
                filteredByTypeData.map((productItems) => (
                        <VerticalCard key={productItems._id} productItems={productItems}/>
                    ))
            }
        </main>
    )
}