import { VerticalCard } from "../../../../Components/VerticalCard/VerticalCard"
import { useData } from "../../../../Context/data.context"

export const ProductDataList = () => {
    const {data} = useData()
    return (
        <main className="main-box grid grid-3-column">
            {
                data.map((productItems) => (
                        <VerticalCard key={productItems._id} productItems={productItems}/>
                    ))
            }
        </main>
    )
}