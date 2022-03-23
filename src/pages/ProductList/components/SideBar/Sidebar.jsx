import { Button } from "../../../../Components/index"
import { useFilteredData } from "../../../../Context/filterData.context"
import { brandLogoData, typeCategorySectionItems, interestCoverData, ratingData, sortByPriceData } from "../../../../data"

export const SideBar = () => {
    const {
        sortBy, 
        filterDispatch, 
        filterByType, 
        filterByBrand, 
        filterByInterest, 
        filterByRatings, 
        priceRange, 
        showFastDeliveryProducts,
        showOutOfStockProducts
    } = useFilteredData();
    return (
        <aside className="aside-box grid">
            <div className="filter-sections filter-head flex-row align-center justify-between">
                <span className="xsm-heading font-weight-5">Filter</span>
                <Button text="Clear All" className="btn-border-none bg-transparent filter-cta-btn font-weight-5" />
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Price Range</span>
                </div>
                <div className="flex-row align-center justify-between font-weight-5 m-vl-1 price-range-output">
                    <input 
                        id="priceRange"
                        className="filter-items"
                        type="range" 
                        min="4000" 
                        max="350000" 
                        value={priceRange} 
                        onChange={(e) => filterDispatch({type: "FILTER_BY_PRICE_RANGE", payload: e.target.value})}
                    />
                    <span className="orange-text range-value flex-row justify-center align-center card-shadow">{priceRange}</span>
                </div>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Sort</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        sortByPriceData.map(({id, inputText, inputPayload, inputAttributeValue}) => (
                            <li key={id} className="align-center">
                                <label htmlFor={inputAttributeValue}>
                                    <input 
                                        className="filter-inputs" 
                                        type="radio" id={inputAttributeValue}
                                        name="sort" 
                                        aria-label={inputText} 
                                        onChange={() => filterDispatch({type: "SORT", payload: inputPayload})} 
                                        checked={sortBy && sortBy === inputPayload}
                                    />
                                    {inputText}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Category</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        typeCategorySectionItems.map(({id, typeCategoryName}) => (
                            <li key={id}>
                                <label htmlFor={`${typeCategoryName}-camera`}>
                                    <input 
                                        className="filter-inputs" 
                                        id={`${typeCategoryName}-camera`} 
                                        type="checkbox"
                                        name={`${typeCategoryName}-camera`} 
                                        aria-label={`${typeCategoryName} camera type checkbox`} 
                                        onChange={() => (filterDispatch({type: "FILTER_BY_TYPE", payload: typeCategoryName}))}
                                        checked={filterByType.includes(typeCategoryName)}
                                    />
                                    {typeCategoryName}
                                </label>
                            </li>
                        ))
                    }
                </ul>  
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Brands</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        brandLogoData.map(({id, brandName}) => (
                            <li key={id}>
                                <label htmlFor={`${brandName}-brand`}>
                                    <input 
                                        className="filter-inputs" 
                                        id={`${brandName}-brand`} 
                                        type="checkbox" 
                                        name={`${brandName}-brand`} 
                                        aria-label={`${brandName} Camera Brand checkbox`} 
                                        onChange={() => filterDispatch({type: "FILTER_BY_BRAND", payload: brandName})}
                                        checked={filterByBrand.includes(brandName)}
                                    />
                                    {brandName}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Interest</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        interestCoverData.map(({id, interestType}) => (
                            <li key={id}>
                                <label htmlFor={`${interestType}-interest`}>
                                    <input 
                                        className="filter-inputs" 
                                        id={`${interestType}-interest`} 
                                        type="checkbox" 
                                        name={`${interestType}-interest`} 
                                        aria-label={`${interestType} Camera checkbox`} 
                                        onChange={() => filterDispatch({type: "FILTER_BY_INTEREST", payload: interestType})}
                                        checked={filterByInterest.includes(interestType)}
                                    />
                                    {interestType}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Ratings</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    {
                        ratingData.map(({id, inputValue, ratingValue}) => (
                            <li key={id}>
                                <label htmlFor={`${ratingValue}-ratings`}>
                                    <input 
                                        className="filter-inputs" 
                                        id={`${ratingValue}-ratings`} 
                                        type="radio" name="rating" 
                                        aria-label={`${inputValue} ratings checkbox`} 
                                        onChange={() => filterDispatch({type: "FILTER_BY_RATINGS", payload: ratingValue})}
                                        checked={filterByRatings === ratingValue}
                                    />
                                    {inputValue}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="filter-sections m-hr-1 flex-column">
                <div className="flex-row align-center justify-between">
                    <span className="sub-filt-head font-weight-5">Other</span>
                </div>
                <ul className="m-vl-1 filter-items">
                    <li>
                        <label htmlFor="out-stock">
                            <input 
                                className="filter-inputs" 
                                id="out-stock" 
                                type="checkbox"
                                name="out-stock" 
                                aria-label="Include Out of Stock"
                                onChange={() => filterDispatch({type: "INCLUDE_OUT_OF_STOCK"})} 
                                checked={showOutOfStockProducts}
                            />
                            Include Out of Stock
                        </label>
                    </li>
                    <li>
                        <label htmlFor="fast-delivery">
                            <input 
                                className="filter-inputs" 
                                id="fast-delivery" 
                                type="checkbox" 
                                name="fast-delivery" 
                                aria-label="Fast Delivery" 
                                onChange={() => filterDispatch({type: "FAST_DELIVERY"})} 
                                checked={showFastDeliveryProducts}
                            />
                            Fast Delivery
                        </label>
                    </li>
                </ul>
            </div>
        </aside>
    )
}